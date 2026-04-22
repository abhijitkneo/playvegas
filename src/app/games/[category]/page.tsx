import BackButton from '@/components/common/BackButton'
import GameCard from '@/components/common/GameCard'
import SectionHeading from '@/components/common/SectionHeading'
import { getAllGamesByCategory } from '@/services/gameService'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { IoChevronBackOutline } from 'react-icons/io5'

export default async function CategoryPage({params}: {params: Promise<{category: string}>}) {

	const {category} = await params
	const games = await getAllGamesByCategory(category)

	return(
		<Container fluid>	
			<Row>
				<Col>
					<div className="d-flex align-items-center gap-3 mb-3">
						<BackButton />
						<SectionHeading title={category} cssClass='text-capitalize m-0' />
					</div>
				</Col>
			</Row>
			<Row className='g-3'>
				{
					games.map((game: any) => (
						<Col md={2} key={game.id}>
							<GameCard game={game} />
						</Col>
					))
				}			
			</Row>
		</Container>
	)
}