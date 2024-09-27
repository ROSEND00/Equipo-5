import React, { useState } from 'react';

import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('APP_USR-b1f04e74-b2f1-4acb-b03c-e25515dd5392');



const productos = [
  {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción del producto 1',
    precio: 10.99,
    imagen: 'https://example.com/producto1.jpg'
  },
  {
    id: 2,
    nombre: 'Producto 2',
    descripcion: 'Descripción del producto 2',
    precio: 9.99,
    imagen: 'https://example.com/producto2.jpg'
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3',
    precio: 12.99,
    imagen: 'https://example.com/producto3.jpg'
  },
  {
    id: 4,
    nombre: 'Producto 4',
    descripcion: 'Descripción del producto 4',
    precio: 8.99,
    imagen: 'https://example.com/producto4.jpg'
  },
  {
    id: 5,
    nombre: 'Producto 5',
    descripcion: 'Descripción del producto 5',
    precio: 11.99,
    imagen: 'https://example.com/producto5.jpg'
  },
];

function Productos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productos);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm); // Asignar el nuevo valor a searchTerm
    const filteredProducts = productos.filter((product) => {
      return product.nombre.toLowerCase().includes(searchTerm) || product.descripcion.toLowerCase().includes(searchTerm);
    });
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="productos">
      <h2>Productos</h2>
      <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Buscar producto" />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.imagen} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p className="precio">Precio: {product.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;