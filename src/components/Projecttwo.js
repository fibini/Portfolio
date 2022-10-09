import React from 'react';
import Games from '../images/Games-store.png';
import '../CSS/maths.css';

const Gamesproject = () => (
  <div className="games-project">
    <a href="https://warm-tarsier-5ebf9e.netlify.app/"><img className="games" src={Games} alt="Games project" /></a>
    <a href="https://github.com/fibini/React-Redux-capstone"><h3>GITHUB REPOSITORY</h3></a>
  </div>
);

export default Gamesproject;
