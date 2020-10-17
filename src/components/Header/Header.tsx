import React from 'react';
import { Link } from "react-router-dom";

import logo from './../../assets/images/logo-white.svg';

//styles
import "./Header.scss"

export const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <nav className="nav_wrapper">
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/contact">Women</Link></li>
                    <li><Link to="/contact">Kids</Link></li>
                </ul>
            </nav>
        </div>
    )
}
