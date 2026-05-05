import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'
import { HiHome } from 'react-icons/hi2'

const BadRequest = ({message = 'Bad Request'} : {message?: string}) => {
	return (
		<Container fluid>
			<h1>400</h1>
			<h4>{message}</h4>
			<p>The request could not be understood</p>
			<Link href={'/'} className='btn btn-outline-primary'><HiHome /> Go Home</Link>
		</Container>
	)
}

export default BadRequest