import React from 'react'

export default function Loading() {
    return (
        <div className="d-flex justify-content-center">
            <p className="text-muted text-primary">Loading..</p>
            <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
