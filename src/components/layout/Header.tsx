import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Header = () => {
  	return (
		<header className='bg-black position-relative py-2'>
			<Container fluid>
				<Row>
					<Col md={3}>
						<Link href={'/'}>
							<img src={'/assets/images/logo.svg'} className='img-fluid logo' />
						</Link>
					</Col>
					<Col md={9} className='text-end align-self-center'>
						<Button variant='primary' size='sm' className='me-2 d-none'>Login</Button>
						<Button variant='outline-primary' size='sm' className='d-none'>Register</Button>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default Header