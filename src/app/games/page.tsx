import GameList from '@/components/common/GameList'
import SectionHeading from '@/components/common/SectionHeading'
import React from 'react'

const page = () => {
    return (
        <> 
            <SectionHeading title='All Games' />
            <GameList />
        </>
    )
}

export default page