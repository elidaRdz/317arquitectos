import React from 'react';
import './Contacto.css';
import logoFb from '../img/logo-fb.png'
import logoIg from '../img/logo-ig.png'
import logoWha from '../img/logo-wha.png'
import logoEmail from '../img/logo-email.webp'
import logoLoc from '../img/logo-loc.png'

/* Hay que actualizar los links para Facebook, Instagram, poner el número de WhatsApp y el Correo */
/* Hay que poner la ubicación o si no cuentan con una, borrar esa sección */
const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <p>¡Contáctanos a través de nuestras diversas redes sociales!</p>
      <div className="contact-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> 
          <img src={logoFb} alt="Facebook" /> 
          <span>Nombre de la página de Facebook</span>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={logoIg} alt="Instagram" />
          <span>Nombre de la cuenta de Instagram</span>          
        </a>
        <a href="https://wa.me/8112341234" target="_blank" rel="noopener noreferrer">
          <img src={logoWha} alt="WhatsApp" />
          <span>(+52) 81 1234 1234</span>
        </a>
        <a href="mailto:correo@gmail.com">
          <img src={logoEmail} alt="Email" />
          <span>correo@gmail.com</span>
        </a>
      </div>
      <p> Ubicación:</p>
      <div className='contact-loc'>
        <a href="https://www.google.com.mx/maps/@25.7645709,-100.3035064,15z?entry=ttu" target='_blank' rel="noopener noreferrer">
          <img src={logoLoc} alt="Ubicación" />
          <span> Calle #1, Colonia, CP. 00000, Ciudad, Estado</span>
        </a>
      </div>
      
    </div>
  );
};

export default Contacto;
