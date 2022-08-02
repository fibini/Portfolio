import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => (
  <nav>
    <div>
      <p>LOGO</p>
    </div>
    <ul>
      <li><NavLink to="/">HOME</NavLink></li>
      <li><NavLink to="/projects">PORTFOLIO</NavLink></li>
      <li><NavLink to="/about">ABOUT</NavLink></li>
      <li><NavLink to="/contact">CONTACT</NavLink></li>
    </ul>
  </nav>
);

export default NavigationBar;
