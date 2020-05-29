import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Oj då, sidan hittades inte</p> 
            <p>(Kläder och Skor har jag inte länkat med flit)</p> 
            <p><Link to="/">Gå till Startsidan</Link></p>
        </div>
    )
}
