import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip } from '@fortawesome/free-solid-svg-icons'
import { faChild } from '@fortawesome/free-solid-svg-icons'
import {faShuttleVan } from '@fortawesome/free-solid-svg-icons'
import {faStar } from '@fortawesome/free-solid-svg-icons'

export default class Services extends Component {
    state = {
        services: [
            {
               icon: <FontAwesomeIcon icon={faShip} className="card-img-top fa-6x" />,
               title: 'Ship Tour',
               description: 'An amazing tour around the beautiful Bay by ship to sightseeing'
            },
            {
                icon: <FontAwesomeIcon icon={faChild} className="card-img-top fa-6x" />,
                title: 'Kids Area',
                description: 'Funny kids area with awesome Toys'
            },
            {
                icon: <FontAwesomeIcon icon={faShuttleVan} className="card-img-top fa-6x" />,
                title: 'Free Shuttle Van',
                description: 'A free Transportation Van for trips and move around'
            }
        ]
    }
    render() {
        return (
            <div className="mb-5">
                <div className="jumbotron text-center">
                    <h3 className="text-center"><FontAwesomeIcon icon={faStar} /> Our Services </h3>
                </div>
                <div className="row text-center">
                    {this.state.services.map((service,index) => {
                        return <div className="col-sm-4" key={index}>
                                    <div className="card border-0">
                                        <div className="card-body">
                                            {service.icon}
                                            <h3 className="card-title">{service.title}</h3>
                                            <p className="card-text">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                    })}
                </div>
                
            </div>
        )
    }
}
