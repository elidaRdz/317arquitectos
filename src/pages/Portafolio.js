import React from 'react';
import './Portafolio.css'; 
import { Carousel } from '../components/Carousel';
import { slides } from "../data/carouselData.json"

const Portafolio = () => {
  return (
    <div className="portafolio-container">
      <h1>Portafolio</h1>
      <Carousel data={slides}/>
    </div>
  );
};

export default Portafolio;