import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Nosotros from './Nosotros';
import Productos from './Productos';
import Carrito from './Carrito';
import Contacto from './Contacto';


function AppRouter() {
  return (
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    
  );
}

export default AppRouter;