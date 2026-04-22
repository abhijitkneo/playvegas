'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Badge, Card } from 'react-bootstrap'

interface GameCardProps {
	game: {
		id: number,
		thumbnail: string,
		title: string,
		game_url: string,
		genre: string
	}
}
const GameCard = ({game} : GameCardProps) => {
	return (
		<Card className='overflow-hidden game-card position-relative'>
			<Card.Img src={game.thumbnail} alt={game.title} />
			<Card.Body className=''>
				<Card.Title className='small text-truncate mb-0'>{game.title}</Card.Title>
				<Link href={`/game/${game.id}`} className='stretched-link' />
				<Badge bg='black' className='fw-medium border border-white border-opacity-25 mt-1 text-white text-opacity-75 position-absolute top-0 start-0 ms-1'>{game.genre}</Badge>
				{/* <p className="m-0 small">{game.genre}</p> */}
				<Image src={'/assets/images/icon-export.svg'} alt='' width={30} height={30} className='position-absolute bg-black bg-opacity-75 view-icon rounded' />
			</Card.Body>
		</Card>
	)
}

export default GameCard