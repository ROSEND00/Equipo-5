import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const [productosCarrito, setProductosCarrito] = useState([]); // Estado para almacenar los productos agregados al carrito

  useEffect(() => {
    // Obtener los productos agregados al carrito desde el localStorage
    const productosCarritoStorage = localStorage.getItem('productosCarrito');
    if (productosCarritoStorage) {
      setProductosCarrito(JSON.parse(productosCarritoStorage));
    }
  }, []);

  useEffect(() => {
    // Actualizar el estado cuando se actualiza el localStorage
    const handleStorageChange = () => {
      const productosCarritoStorage = localStorage.getItem('productosCarrito');
      if (productosCarritoStorage) {
        setProductosCarrito(JSON.parse(productosCarritoStorage));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const eliminarProducto = (id) => {
    const productosCarritoActualizados = productosCarrito.filter((producto) => producto.id !== id);
    setProductosCarrito(productosCarritoActualizados);
    localStorage.setItem('productosCarrito', JSON.stringify(productosCarritoActualizados));
  };

  return (
    <div>
      <div className="titulo-carrito">
      <h2>Carrito de compras</h2>
      </div>
      <table className="carrito-table">
  <thead>
    <tr>
      <th>Imagen</th>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Eliminar</th>
    </tr>
  </thead>
  <tbody>
        {productosCarrito.map((producto) => (
          <tr key={producto.id}>
          <td>  <img src={producto.imagen} alt={producto.nombre} width="100px"/> </td>
          <td> <h3>{producto.nombre}</h3></td> 
            <td><p>Precio: ${producto.precio}</p></td>
            <td>
          <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
        </td>
            </tr>
        ))}
      </tbody>
      </table>  
      <Link to="/productos">
    <button>Seguir comprando</button>
  </Link>
    </div>
  );
};

export default Carrito;