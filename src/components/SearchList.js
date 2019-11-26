import React from 'react'
import Room from './Room'

export default function SearchList({rooms}) {

    if(rooms.length === 0){
        return(
            <div className="alert alert-info text-center">
                <h3>Sorry, no rooms matched your search parameters</h3>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {rooms.map(item => {
                    return <Room key={item.id} room={item} />
                })}
            </div>
        </div>
    )
}
