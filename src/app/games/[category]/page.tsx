import BackButton from '@/components/common/BackButton'
import BadRequest from '@/components/common/BadRequest'
import GameCard from '@/components/common/GameCard'
import GameListInfinite from '@/components/common/GameListInfinite'
import SectionHeading from '@/components/common/SectionHeading'
import { getAllGamesByCategory } from '@/services/gameService'
import { Col, Container, Row } from 'react-bootstrap'

export default async function CategoryPage({params}: {params: Promise<{category: string}>}) {

	const {category} = await params
	const decodedCategory = decodeURIComponent(category)
	const games = await getAllGamesByCategory(category)

	if(!games || games.status === 0) {
		return <BadRequest message="Invalid game request" />
	}

	return(
		<Container fluid>	
			<Row>
				<Col>
					<div className="d-flex align-items-center gap-3 mb-3">
						<BackButton />
						<SectionHeading title={decodedCategory} cssClass='text-capitalize m-0' />
						<p className="m-0 rounded-pill px-3 text-bg-light py-1 small">{games.length} Games</p>
					</div>
				</Col>
			</Row>
			{/* <Row className='g-3'>
				{
					games.map((game: any) => (
						<Col md={2} key={game.id}>
							<GameCard game={game} />
						</Col>
					))
				}
			</Row> */}
			<GameListInfinite initialGames={games} />
		</Container>
	)
}