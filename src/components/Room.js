import React from 'react'
import {Link} from 'react-router-dom'
import noPreview from '../images/noPreview.jpg'
import PropTypes from 'prop-types';

export default function Room({room}) {
    const{name, slug, images, price} = room;

    return (
        <div className="col-sm-4">
            <div className="card bg-dark text-white">
                <img src={images[0] || noPreview} className="card-img" alt={name} />
                <div className="card-img-overlay">
                    <p className="card-text float-left">${price} Per Day</p>
                    <h5 className="card-title">{name}</h5>
                    <Link to={`/rooms/${slug}`} className="btn btn-primary">Features</Link>
                </div>
            </div>
        </div>
    )
}

Room.prototype = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}