'use client';

import { getGames } from '@/services/gameService';
import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import GameCard from './GameCard';
import PageLoader from './PageLoader';
import NoGamesFound from './NoGamesFound';

const GameList = () => {
	const [games, setGames] = useState<any[]>([]);
	const [filteredGames, setFilteredGames]= useState<any[]>([]);
	const [genre, setGenre] = useState('');
	const [platform, setPlatform] = useState('');

	const genres = [...new Set(games.map(g => g.genre))];
	const platforms = [...new Set(games.map(p => p.platform))];
	const hasActiveFilters = genre || platform;

	const [loading, setLoading] = useState(true);


	//console.log(games, '<< All games');
	//console.log(platforms, '<< All Platforms'	);
	
	useEffect(() => {
		getGames().then((data) => {
			setGames(data);
			setFilteredGames(data);
		}).finally(() => setLoading(false));
	}, [])

	useEffect(() => {
		setLoading(true);

		const timeout = setTimeout(() => {
			let updated = [...games];

			if (genre) {
				updated = updated.filter((game) =>
					game.genre.toLowerCase().includes(genre)
				);
			}

			if (platform) {
				updated = updated.filter((game) =>
					game.platform.toLowerCase().includes(platform)
				);
			}
			setFilteredGames(updated);
			setLoading(false);

		}, 300)	

		return () => clearTimeout(timeout);

	}, [genre, platform, games]);

	return (
		<>
			<div className="game-filters bg-light p-3 rounded mb-4">
				<Row className='gx-3'>
					<Col md={3}>
						<Form.Group>
							<Form.Label>Genre</Form.Label>
							<Form.Select
								value={genre}
								onChange={(e) => setGenre(e.target.value)}
							>
								<option value=''>All Genre</option>
								{
									genres.map(g => (
										<option value={`${g.toLowerCase()}`} key={g}>{g}</option>
									))
								}
							</Form.Select>
						</Form.Group>
					</Col>
					<Col md={3}>
						<Form.Group>
							<Form.Label>Platform</Form.Label>
							<Form.Select
								value={platform}
								onChange={(e) => setPlatform(e.target.value)}
							>
								<option value="">All Platforms</option>
								{
									platforms.map(p => (
										<option value={`${p.toLowerCase()}`} key={p}>{p}</option>
									))
								}
							</Form.Select>
						</Form.Group>
					</Col>
					{
						hasActiveFilters && (
							<>
								<Col md={3} className='align-self-end'>
									<Button variant='primary' 
										onClick={ () => {
												setGenre('');
												setPlatform('');
											}
										}
									>Clear</Button>
								</Col>
								<Col sm={12}>
									<p className="m-0 mt-2">
										Showing <span className="text-primary rounded fw-semibold px-1">{filteredGames.length}</span> results for 
										<span className="text-primary rounded fw-semibold text-capitalize d-inline-block px-1">{genre && `${genre}`}</span>
										{genre && platform && <span>and</span>}
										<span className="text-primary rounded fw-semibold text-capitalize d-inline-block px-1">{platform && `${platform}`}</span>
									</p>
								</Col>
							</>
						)
					}
				</Row>
			</div>
			{
				loading ? (
					<PageLoader />
				) : (
					<Row className='g-3'>
						{
							filteredGames.length > 0 ? (
								filteredGames.map((game) => (
									<Col md={2} key={game.id}>
										<GameCard game={game} />
									</Col>
								))
							) : (
								<NoGamesFound />
							)
						}
					</Row>
				)
			}
		</>
	)
}

export default GameList