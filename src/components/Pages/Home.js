import React, { useEffect } from 'react';
import '../../CSS/home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home-container">
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
