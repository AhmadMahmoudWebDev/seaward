import React from 'react'
import Jumbotron from '../components/Jumbotron'
import {Link} from 'react-router-dom'
import Search from '../components/Search'

function Rooms() {
    return (
        <div>
            <Jumbotron title="Our Rooms" subtitle="Find What Fits you" bg="https://ahmadmahmoud.sirv.com/seaward/rooms.jpg">
                
            </Jumbotron>
            <Search />
        </div>
    )
}

export default Rooms
