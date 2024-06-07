import React, { useState } from 'react';
import "../components/Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };
  
    return (
      <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
        <img src={process.env.PUBLIC_URL + images[currentSlide]} alt={`Slide ${currentSlide}`} />
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
      </div>
    );
};
  
export default Carousel;