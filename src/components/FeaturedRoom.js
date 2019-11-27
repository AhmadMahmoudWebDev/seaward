import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading';
import Room from './Room';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'

export default class FeaturedRoom extends Component {

    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        });
        
        return (
            <>
                <div className="jumbotron text-center">
                    <h3><FontAwesomeIcon icon={faBed} /> FeaturedRoom</h3>
                </div>
                <div className="row text-center mb-5">
                    {loading ? <Loading /> : rooms}
                </div>
            </>
        )
    }
}
