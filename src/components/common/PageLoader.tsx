'use client';
import React from 'react'
import { Card, Col, Placeholder, Row } from 'react-bootstrap'

const PageLoader = () => {
	return (
		<Row>
			{
				Array.from({length: 6}).map((_, i) => (
					<Col md={2} key={i}>
						<Placeholder as={Card.Text} animation="glow">
							<Placeholder xs={12}  className="rounded" style={{height: '150px'}} />
						</Placeholder>
					</Col>
				))
			}
		</Row>
	)
}

export default PageLoader