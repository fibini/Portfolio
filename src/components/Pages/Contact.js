import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div>
      <img src="https://images5.alphacoders.com/413/413977.jpg" alt="space" className="bgimg" data-aos="zoom-in" />
      <h1 className="contact" data-aos="zoom-in">CONTACT INFORMATION</h1>
      <p data-aos="zoom-out">fabienswift@gmail.com</p>
    </div>
  );
};

export default Contact;
