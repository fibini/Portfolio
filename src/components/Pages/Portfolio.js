/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react';
import Slider from 'react-slick';
import Gamesproject from '../Projecttwo';
import Bookproject from '../Projectthree';
import Mathproject from '../Project';
import '../../CSS/portfolio.css';
import Leaderboard from '../Projectfour';
import Spotitfy from '../Projectfive';
import SpaceTravelers from '../Projectsix';

const Portfolio = () => {
  const [, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="slides">
      <div>
        {/* <FontAwesomeIcon icon={faArrowCircleLeft} /> */}
      </div>
      <Slider {...settings}>
        <div>
          <Mathproject />
        </div>
        <div>
          <Gamesproject />
        </div>
        <div>
          <Bookproject />
        </div>
        <div>
          <Leaderboard />
        </div>
        <div>
          <Spotitfy />
        </div>
        <div>
          <SpaceTravelers />
        </div>
      </Slider>
      <span>
        {/* <FontAwesomeIcon icon={faArrowCircleRight} /> */}
      </span>
    </div>
  );
};

export default Portfolio;
