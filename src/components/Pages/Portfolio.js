/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react';
import Slider from 'react-slick';
import Games from '../../images/Games-store.png';
import Book from '../../images/Book-store.png';
import Maths from '../../images/Maths.png';
import '../../CSS/portfolio.css';

const images = [Games, Book, Maths];

const Portfolio = () => {
  const [imageIndex, setImageIndex] = useState(0);

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
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className={index === imageIndex ? 'slide activeSlide' : 'slide'}><img src={img} alt={img} /></div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
