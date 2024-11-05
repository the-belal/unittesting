// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <Link to="/" className="navbar-logo">
              <span>Brainplow-Technology</span>
          </Link>
        </div>
        <div className="navItems">
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/sign-up">Sign Up</Link></li>
            {/* Add more navigation links as needed */}
          </ul>        
        </div>  
      </div>
    </div>
  );
};

export default Navbar;
