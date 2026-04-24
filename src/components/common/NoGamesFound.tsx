import Image from "next/image"
import { Col } from "react-bootstrap"

const NoGamesFound = () => {
	return (
		<Col md={12} className='text-center'>
			<Image alt='No Games Found' src={'/assets/images/img-no-games-found.png'} width={120} height={120} className='opacity-75' />
			<p className="mb-0 mt-3">No Games Found</p>
		</Col>
	)
}

export default NoGamesFound