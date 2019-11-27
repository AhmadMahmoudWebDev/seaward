import React from 'react'
import Jumbotron from '../components/Jumbotron'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'

function Home() {
    return (
        <>
          <Jumbotron  title="Welcome To SeaWard Beach Resort" subtitle="Get Yourself Near the Amazing Sea Sight" bg="https://ahmadmahmoud.sirv.com/seaward/home.jpg">
              <Link to="/rooms"className="btn btn-secondary shadow round">Let's Go Seaward!</Link>
          </Jumbotron>
          <Services />
          <FeaturedRoom />
        </>
    )
}

export default Home
