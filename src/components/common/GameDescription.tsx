'use client';

import { useState } from 'react';
import { Button } from 'react-bootstrap'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'

interface GameDescription {
	description: string
}
const GameDescription = ({description} : GameDescription) => {
	const [toggleInfo, setToggleInfo] = useState(false);

	return (
		<>
			<div className={`game-description ${toggleInfo ? 'show' : 'hide'}`}>
				<p className='mb-0'>{description}</p>
			</div>
			<div className="d-flex justify-content-end">
				<Button 
					size='sm' 
					variant='link' 
					className={`p-0 lh-sm btn-with-icon border-0 text-decoration-none ${toggleInfo ? 'mt-2' : ''}`}
					onClick={() => setToggleInfo(!toggleInfo)}
				>
					{
						toggleInfo ? <>View Less <LuChevronUp size={20} /></> : <>View More <LuChevronDown size={20} /></>
					}
				</Button>
			</div>
		</>
	)
}

export default GameDescription