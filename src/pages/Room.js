import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import Jumbotron from '../components/Jumbotron'


export default class Room extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props)
        this.state = {
            slug: this.props.match.params.room

        }
    }

    componentDidMount() {

    }

    static contextType = RoomContext;

    render() {

        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        
        if(!room) {
            return (
                <div className="jumbotron text-center">
                    <div className="alert alert-danger" role="alert">
                        <h1>Sorry :( There is no such a room!...</h1>
                        <Link to="/rooms" className="btn btn-primary shadow">Return To Rooms Page</Link>
                    </div>
                </div>
            );
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;

        return (
            <div>
                <Jumbotron title={name} bg={images[0]}>
                    <Link to="/rooms"className="btn btn-primary btn-lg shadow">View Our Rooms</Link>
                </Jumbotron>
                <div className="row text-center mr-0">
                    {images.map((item, index) => {
                        return <div className="col-md-3">
                            <img className="img img-responsive img-thumbnail rounded shadow" src={item} key={index} alt={name}/>
                        </div>
                    })}
                </div>
                <div className="row mr-0">
                    <div className="col-sm-7 m-auto pt-5">
                        <div className="card">
                            <div className="card-header">
                                <h3>Details</h3>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    {description}
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Price: ${price} Per Day</li>
                                        <li className="list-group-item">Size: {size} SQFT</li>
                                        <li className="list-group-item">Max Capacity: {capacity > 1 ? `${capacity} People` : `${capacity} Person`}</li>
                                        <li className="list-group-item">Pets: {pets ? "Allowed" : "Not Allowed"}</li>
                                        <li className="list-group-item">{breakfast && "Free Breakfast Included"}</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h3 className="card-header">Extras</h3>
                                    <ul className="list-group list-group-flush">
                                        {extras.map((item, index)=>{
                                            return <li className="list-group-item" key={index}>{item}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
