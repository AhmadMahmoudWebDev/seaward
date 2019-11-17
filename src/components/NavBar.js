import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="SeaWard Logo" className="img rounded shadow"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><FontAwesomeIcon icon={faHotel} /> Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rooms/"><FontAwesomeIcon icon={faBed} /> Our Rooms</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
