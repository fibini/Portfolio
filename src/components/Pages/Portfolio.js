/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
// import Games from '../../images/Games-store.png';
import Gamesproject from '../Projecttwo';
import Bookproject from '../Projectthree';
import Mathproject from '../Project';
// import Book from '../../images/Book-store.png';
// import Maths from '../../images/Maths.png';
import '../../CSS/portfolio.css';

// const images = [Gamesproject, Book, Maths];

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
        <FontAwesomeIcon icon={faArrowCircleLeft} />
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
      </Slider>
      <span>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </span>
    </div>
  );
};

export default Portfolio;
