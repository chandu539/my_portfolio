import React from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-heading">
        <h1>Portfolio</h1>
      </div>
      <div className="navbar-links">
        <ul className="list">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
