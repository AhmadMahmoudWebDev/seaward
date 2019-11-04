import React from 'react'

export default function Jumbotron({children, title, subtitle, bg}) {
    
    return (
        <div className={`jumbotron text-center ${bg}`}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {children}
        </div>
    )
}

