import React from 'react';
import { Link } from "react-router-dom";

import logo from './../../assets/images/footer-logo.svg';

//styles
import "./AnotherHeader.scss"

export const AnotherHeader = () => {
    return (
        <div className="AnotherHeader">
            <div className="container">
                <div className="Header__wrap--another">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <nav className="Another-nav_wrapper">
                        <ul>
                            <li><Link to="/">Main</Link></li>
                            <li><Link to="/Products">Food</Link></li>
                            <li><Link to="/Bio">Bio</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
