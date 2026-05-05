import GameList from '@/components/common/GameList'
import SectionHeading from '@/components/common/SectionHeading'
import React from 'react'
import { Container } from 'react-bootstrap'

const page = () => {
    return (
        <Container fluid> 
            {/* <SectionHeading title='All Games' /> */}
            <GameList />
        </Container>
    )
}

export default page