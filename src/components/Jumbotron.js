import React from 'react'


export default function Jumbotron({children, title, subtitle, bg}) {

    let style = {
        backgroundImage : "url('" + bg + "')",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
    
    return (
        <div className="jumbotron text-center" style={style}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {children}
        </div>
    )
}

