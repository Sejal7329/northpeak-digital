import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="navbar-header">
      <nav className="navbar container">
        <a href="#hero" className="logo">
          NorthPeak<span>Digital</span>
        </a>

        <ul className={navOpen ? "nav-menu active" : "nav-menu"}>
          <li><a href="#hero" onClick={toggleNav}>Home</a></li>
          <li><a href="#services" onClick={toggleNav}>Services</a></li>
          <li><a href="#portfolio" onClick={toggleNav}>Portfolio</a></li>
          <li><a href="#pricing" onClick={toggleNav}>Pricing</a></li>
          <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
          <li>
            <a href="#contact" className="btn-nav" onClick={toggleNav}>
              Get Started
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleNav} aria-label="Toggle Navigation">
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};
