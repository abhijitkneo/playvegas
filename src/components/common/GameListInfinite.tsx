'use client';

import { useEffect, useRef, useState } from "react";
import PageLoader from "./PageLoader";
import { Col, Row, Spinner } from "react-bootstrap";
import GameCard from "./GameCard";

const GameListInfinite = ({initialGames} : {initialGames: any[]}) => {
	const visibleGameCount = 18;
	const [visibleCount, setVisibleCount] = useState(visibleGameCount)
	const loaderRef = useRef<HTMLDivElement | null>(null)
	const [loading, setLoading] = useState(true);

	const visibleGames = initialGames.slice(0, visibleCount);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if(entries[0].isIntersecting && visibleCount < initialGames.length) {
					setTimeout(() => {
						setVisibleCount((pre) => pre + visibleGameCount)
					}, 600)
				}
			},
			{threshold: 0.5}
		);

		const el = loaderRef.current
		if (el) observer.observe(el);
		
		return () => {
			if (el) observer.unobserve(el)
		}
	}, [visibleCount, initialGames])

	return (
		<>
			<Row className='g-3'>
				{
					visibleGames.map((game) => (
						<Col md={2} key={game.id}>
							<GameCard game={game} />
						</Col>
					))
				}
			</Row>
			<Row className='mt-4'>
				<Col sm={12} ref={loaderRef} className='text-center'>
					{
						visibleCount < initialGames.length && (
							<>
								<Row className='mb-4'>
									<PageLoader />
								</Row>
								<div className="d-inline-flex align-items-center justify-content-center gap-2 border border-primary text-center rounded py-2 px-3">
									<Spinner animation='border' size='sm' variant='primary' /> Loading more games
								</div>
							</>
						)
					}
				</Col>
			</Row>
		</>
	)
}

export default GameListInfinite