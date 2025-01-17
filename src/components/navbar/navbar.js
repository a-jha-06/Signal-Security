// src/Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import logo from "../../images/logo.png"

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <ul className={`nav-links ${isMobile ? "active" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Our Services</a></li>

                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/contact">Gallery</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
