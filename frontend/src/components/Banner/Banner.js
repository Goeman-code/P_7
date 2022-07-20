import React from "react";
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import '../Styles/Banner.css'

export default function Banner() {
    return (
        <div className="header">
            <div className="header_link">
                <Link to="/register">Register</Link>
            </div>
            <div className='gpm-banner'>
                <img src={logo} alt='Groupomania' className='gpm-logo' />
            </div>
            <div className="header_link">
                <Link to="/">Log in</Link>
            </div>
        </div>
    )
}
