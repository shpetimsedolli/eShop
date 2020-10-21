import React from 'react'
import { Link } from "react-router-dom";

import './HomeButton.scss'


export const HomeButton = () => {
    return (
        <div className="HomeButton">
            <Link to={`/`}>
                <h3>Home</h3>
            </Link>
        </div>
    )
}
