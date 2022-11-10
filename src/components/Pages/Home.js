import React, { useEffect } from 'react';
import '../../CSS/home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className="home-container">
      <img src="http://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-2.jpg" alt="space" className="bgimg" data-aos="zoom-in" />
      <div className="welcome" data-aos="fade-down">
        <h1>WELCOME</h1>
      </div>
      <div className="to" data-aos="fade-right">
        <h2>TO</h2>
      </div>
      <div className="my" data-aos="fade-left">
        <h2>MY</h2>
      </div>
      <div className="portfolio" data-aos="fade-up">
        <h2>PORTFOLIO</h2>
      </div>
    </div>
  );
}
