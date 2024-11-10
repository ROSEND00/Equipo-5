import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Nosotros from './Nosotros';
import Productos from './Productos';
import Carrito from './Carrito';
import Contacto from './Contacto';
import Academy from './academy';
import Empleo from './empleo';
import Pago from './Pago';
import Inventarios from './inventarios';

function AppRouter() {
  return (
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/empleo" element={<Empleo />} />
      <Route path="/Pago" element={<Pago />} />
      <Route path="/inventarios" element={<Inventarios />} />
      
    </Routes>
    
  );
}

export default AppRouter;