import GameCard from "@/components/common/GameCard";
import GameList from "@/components/common/GameList";
import Top10GameSection from "@/components/common/Top10GameSection";
import { getGames } from "@/services/gameService";
import { Button, Col, Container, Row } from "react-bootstrap";


export default async function Home() {
	const games = await getGames();
	console.log(games, '<< All games');
	
	return (
		<Container fluid>
			<Top10GameSection category="shooter" />
			<Top10GameSection category="strategy" />
			<Top10GameSection category="battle royale" />

			<Row>
				<Col md={12} className="text-center">
					<Button variant="primary" href="/games">View All Games</Button>
				</Col>
			</Row>
		</Container>
	);
}
