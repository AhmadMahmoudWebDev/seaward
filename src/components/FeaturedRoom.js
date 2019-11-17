import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading';
import Room from './Room';

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
                    <h1>FeaturedRoom</h1>
                </div>
                <div className="row text-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </>
        )
    }
}
