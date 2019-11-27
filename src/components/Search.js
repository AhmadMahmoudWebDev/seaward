import React from 'react'
import Filter from './Filter'
import SearchList from './SearchList'
import {RoomConsumer} from '../context'
import Loading from './Loading'

export default function Search() {
    return (
        <RoomConsumer>
            {(value) =>{

                const {loading, sortedRooms, rooms} = value

                if (loading) {
                    return <Loading />
                }

                return (
                    <div className="container-fluid mb-5">
                        <Filter rooms={rooms} />
                        <SearchList rooms={sortedRooms}/>
                    </div>
                )
            }}
        </RoomConsumer>
    )
}
