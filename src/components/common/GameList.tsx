'use client';

import { getGames } from '@/services/gameService';
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import GameCard from './GameCard';

const GameList = () => {
	const [games, setGames] = useState<any[]>([]);

	console.log(games, '<< All games');
	
	useEffect(() => {
		getGames().then(setGames);
	}, [])

	return (
		<Row className='gy-3'>
			{
				games.map((game) => (
					<Col md={2} key={game.id}>
						<GameCard game={game} />
					</Col>
				))
			}
		</Row>
	)
}

export default GameList