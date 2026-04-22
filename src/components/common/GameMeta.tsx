import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsWindows } from 'react-icons/bs'
import { GoGlobe } from 'react-icons/go'

interface GameMetaProps {
	game: any
}

const GameMeta = ({game}: GameMetaProps) => {
	const game_platform = game.platform.toLowerCase();

	const gameMetaData = [
		{ label: 'Title', value: game.title},
		{ label: 'Developer', value: game.developer},
		{ label: 'Publisher', value: game.publisher},
		{ label: 'Release Date', value: game.publisher},
		{ label: 'Genre', value: game.genre}
	]
	return (
		<div className="additional-info bg-body rounded p-3">
			<Row className='row-cols-2 row-cols-md-3 gy-3'>
				{
					gameMetaData.map((item) => (
						<Col key={item.label}>
							<p className="m-0">
								<span className="d-block">{item.label}</span>
								<span className="text-white">{item.value}</span>
							</p>
						</Col>
					))
				}
				<Col>
					<p className="m-0">
						<span className="d-block">Platform</span>
						<span className="text-white d-flex align-items-center gap-2">
							{ game_platform.includes('windows') && <><BsWindows /> Windows</> }
							{ game_platform.includes('web browser') && <><GoGlobe />Web Browser</> }
						</span>
					</p>
				</Col>
			</Row>
		</div>
	)
}

export default GameMeta