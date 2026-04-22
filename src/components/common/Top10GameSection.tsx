'use client';
import { getTopGamesByCategory } from '@/services/gameService';
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardImg, Col, Placeholder, Row } from 'react-bootstrap';
import GameCard from './GameCard';
import SectionHeading from './SectionHeading';

interface GameSectionProps {
	category: string
}


const Top10GameSection = ({category}: GameSectionProps) => {
	const [games, setGames] = useState<any[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getTopGamesByCategory(category).then(setGames).finally(() => setLoading(false))
	}, [category])
	
	return (
		<>
			<Row className='mb-3'>
				<Col md={12} className='align-self-center'>
					<div className="d-flex align-items-center justify-content-between">
						<SectionHeading title={`Top 10 ${category} Games`} cssClass='mb-0 text-capitalize' />
						<Button variant='outline-primary' size='sm' href={`/games/${category}`}>View All</Button>
					</div>
				</Col>
			</Row>
			{
				loading ? (
					<Row className='g-3 mb-4'>
						{
							Array.from({length: 6}).map((_, i) => (
								<Col md={2} key={i}>
									<Placeholder as={Card.Text} animation="glow">
										<Placeholder xs={12}  className="rounded" style={{height: '150px'}} />
									</Placeholder>
								</Col>
							))
						}
					</Row>
				) : (
					<Row className='flex-nowrap overflow-auto no-scrollbar g-3 mb-4'>
						{
							games.length !== 0 ? games.map((game) => (
								<Col md={2} key={game.id}>
									<GameCard game={game} />
								</Col>
							)) : (
								<Col>
									<p className="text-center mb-0">No Games Found</p>
								</Col>
							)
						}
					</Row>
				)
			}
		</>
	)
}

export default Top10GameSection