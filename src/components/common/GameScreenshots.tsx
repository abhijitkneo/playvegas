'use client';

import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SectionHeading from './SectionHeading';

interface Screenshot {
	id: number,
	image: string
}

interface GameScreenshotsProps {
	screenshots: Screenshot[],
	gameTitle?: string
}


const GameScreenshots = ({screenshots, gameTitle}: GameScreenshotsProps) => {
	const [open, setOpen] = useState(false)
	const [index, setIndex] = useState(0)

	const slides = screenshots.map((screenshot: Screenshot) => ({
		src: screenshot.image
	}))
	
	return (
		<>
			<Row>
				<Col md={12}>
					<SectionHeading includeGameTitle gameTitle={gameTitle} title='Screenshots' />
				</Col>
			</Row>
			<Row>
				{
					screenshots.map((screenshot: Screenshot, i:number) => (
						<Col md={3} key={screenshot.id}>
							<img 
								src={screenshot.image}
								alt={`screenshot-${i + 1}`}
								onClick={() => {setIndex(i), setOpen(true)}}
								className='img-fluid cursor-pointer rounded'
							/>
						</Col>
					))
				}
			</Row>
			<Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
            />
		</>
	)
}

export default GameScreenshots