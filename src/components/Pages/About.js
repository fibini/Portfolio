/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faAngellist,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import '../../CSS/about.css';

const About = () => (
  <div>
    <section className="about-container">
      <div className="head-container">
        <h1>FABIEN</h1>
        <h2>SOFTWARE DEVELOPER</h2>
      </div>
      <p>
        I can help you build a product ,feature or website Look through some of
        my work and experience! If you like what you see and have a project you
        need coded, don’t hestiate to contact me.
      </p>
      <div className="skills-container">
        <div>
          <h4 className="skills-heading">LANGUAGES</h4>
          <ul>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>RUBY</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <h4 className="skills-heading">FRAMEWORKS</h4>
          <ul>
            <li>RUBY ON RAILS</li>
            <li>BOOTSTRAP</li>
            <li>RSPec</li>
            <li>CAPYBARA</li>
            <li>SELENIUM</li>
          </ul>
        </div>
        <div>
          <h4 className="skills-heading">SKILLS</h4>
          <ul>
            <li>CODEKIT</li>
            <li>CODEPEN</li>
            <li>GITHUB</li>
            <li>GITLAB</li>
            <li>TERMINAL</li>
          </ul>
        </div>
      </div>
    </section>
    <div className="socials-container">
      <div>
        <a href="https://angel.co/u/fabien-brathwaite"><FontAwesomeIcon icon={faAngellist} /></a>
      </div>
      <div>
        <a href="https://github.com/fibini"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
      <div>
        <a href="https://medium.com/@fabienswift"><FontAwesomeIcon icon={faMedium} /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/fabien-brathwaite/"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
      <div>
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </div>
  </div>
);

export default About;
