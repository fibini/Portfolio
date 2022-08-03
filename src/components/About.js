import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, faGithub, faTwitter, faAngellist, faMedium,
} from '@fortawesome/free-brands-svg-icons';

const About = () => (
  <div>
    <section>
      <h1>FABIEN</h1>
      <h2>SOFTWARE DEVELOPER</h2>
      <p>
        I can help you build a product ,feature or
        website Look through some of my work and experience!
        If you like what you see and have a project you need coded, don’t hestiate to contact me.
      </p>
      <div>
        <div>
          <h4>LANGUAGES</h4>
          <ul>
            <li>JAVASCRIPT</li>
            <li>RUBY</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <h4>FRAMEWORKS</h4>
          <ul>
            <li>RUBY ON RAILS</li>
            <li>BOOTSTRAP</li>
            <li>RSPec</li>
            <li>CAPYBARA</li>
            <li>SELENIUM</li>
          </ul>
        </div>
        <div>
          <h4>SKILLS</h4>
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
    <div>
      <FontAwesomeIcon icon={faAngellist} />
    </div>
    <div>
      <FontAwesomeIcon icon={faGithub} />
    </div>
    <div>
      <FontAwesomeIcon icon={faMedium} />
    </div>
    <div>
      <FontAwesomeIcon icon={faLinkedin} />
    </div>
    <div>
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  </div>
);

export default About;
