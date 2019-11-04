import React from 'react'
import Jumbotron from '../components/Jumbotron'
import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <>
           <Jumbotron title="Ops.. Page Not Found...:(" bg="notFound-bg">
               <Link to="/" className="btn btn-lg btn-primary shadow">Go Back To Home Page</Link>
           </Jumbotron>
        </>
    )
}
