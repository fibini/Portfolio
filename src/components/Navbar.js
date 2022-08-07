import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/navbar.css';

const NavigationBar = () => (
  <nav className="navbar">
    <div className="logo">
      <p>LOGO</p>
    </div>
    <ul className="navlinks">
      <li className="li-nav">
        <NavLink to="/">
          HOME
        </NavLink>
      </li>
      <li className="li-nav"><NavLink to="/projects">PORTFOLIO</NavLink></li>
      <li className="li-nav"><NavLink to="/about">ABOUT</NavLink></li>
      <li className="li-nav"><NavLink to="/contact">CONTACT</NavLink></li>
    </ul>
  </nav>
);

export default NavigationBar;
