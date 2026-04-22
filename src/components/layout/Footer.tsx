import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='bg-black py-3 position-relative'>
			<Container fluid>
				<Row>
					<Col>
						<p className="mb-0 small text-white-50 text-center">&copy; PlayVegas 2026</p>
					</Col>
				</Row>
			</Container>
		</footer>
    )
}

export default Footer