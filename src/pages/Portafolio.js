import React from 'react';
import './Portafolio.css';
import '../components/Carousel.css';
import Carousel from '../components/Carousel';

const Portafolio = () => {
  const images = [
    '/img/port1.jpeg',
    '/img/port2.jpeg',
    '/img/port3.jpeg',
    '/img/port4.jpeg',
  ];

  return (
    <div className="portafolio-container">
      <h1>Portafolio</h1>
      <Carousel images={images} />
    </div>
  );
};

export default Portafolio;