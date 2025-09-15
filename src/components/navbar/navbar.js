import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile((prev) => !prev);
  const closeMenu = () => setIsMobile(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/">
          <img src="/images/logo.png" alt="Company Logo" className="logo-image" />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobile ? "active" : ""}`}>
        <li>
          <a href="/" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeMenu}>
            Our Services
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact Us
          </a>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
