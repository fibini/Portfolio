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
      <li className="li-nav2 page"><NavLink to="/">PAGE</NavLink></li>
      <li className="li-nav"><NavLink to="/projects">PORTFOLIO</NavLink></li>
      <li className="li-nav2 project"><NavLink to="/projects">PROJECTS</NavLink></li>
      <li className="li-nav"><NavLink to="/about">ABOUT</NavLink></li>
      <li className="li-nav2 me"><NavLink to="/about">ME</NavLink></li>
      <li className="li-nav"><NavLink to="/contact">CONTACT</NavLink></li>
      <li className="li-nav2 fabien"><NavLink to="/contact">INFO</NavLink></li>
    </ul>
  </nav>
);

export default NavigationBar;
