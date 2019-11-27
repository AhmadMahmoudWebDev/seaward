import React from 'react'
import {Link} from 'react-router-dom'
import noPreview from '../images/noPreview.jpg'
import PropTypes from 'prop-types';

export default function Room({room}) {
    const{name, slug, images, price} = room;

    return (
        <div className="col-sm-3 mb-4">
            <div className="card text-center">
                <img src={images[0] || noPreview} className="card-img" alt={name} />
                <div className="card-img-overlay">
                    <p className="badge badge-pill badge-danger float-left">${price} Per Day</p>
                    <h5 className="badge badge-pill badge-danger float-right">{name}</h5>
                </div>
                <div className="card-footer">
                    <Link to={`/rooms/${slug}`} className="btn btn-secondary shadow">View Room's Features</Link>
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