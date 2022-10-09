import React from 'react';
import Leader from '../images/leaderboard.png';
import '../CSS/maths.css';

const Leaderboard = () => (
  <div className="leaderboard-project">
    <a href="https://fibini.github.io/Leaderboard-App/dist/"><img className="maths" src={Leader} alt="Leaderboard project" /></a>
    <a href="https://github.com/fibini/Leaderboard-App"><h3>GITHUB REPOSITORY</h3></a>
  </div>
);

export default Leaderboard;
