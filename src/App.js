import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Portafolio from './pages/Portafolio';
import Blog from './pages/Blog';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Revisiones from './pages/Revisiones';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/revisiones" element={<Revisiones />} />
      </Routes>
    </Router>
  );
}

export default App;