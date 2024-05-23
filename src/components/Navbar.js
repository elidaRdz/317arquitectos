import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logoH_negro.jpg'; 

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/portafolio">Portafolio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/revisiones">Revisiones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;