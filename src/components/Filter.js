import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'

export default function Filter() {

    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets

    } = context;

    return (
        <div className="container-fluid mb-5">
            <form>
                <div className="row">
                    <div className="form-group col-sm-3">
                        <label htmlFor="type">Room Type</label>
                        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                            <option value="all">all</option>
                            <option value="single">single</option>
                            <option value="family">family</option>
                            <option value="presidential">presidential</option>
                            <option value="double">double</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-1">
                        <label htmlFor="capacity">Guests</label>
                        <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-2">
                        <label htmlFor="price">Room Price ${price}</label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} value={price} id="price" onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group col-sm-3">
                        <label htmlFor="size">Room Size</label>
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="form-control" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group col-sm-3">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                        <br />
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
            </form>
        </div>
    )
}
