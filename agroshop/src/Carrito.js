import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Inventarios from './inventarios';

const Carrito = () => {
  const [productosCarrito, setProductosCarrito] = useState([]); // Estado para almacenar los productos agregados al carrito
  const navigate = useNavigate();
  
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

  useEffect(() => {
    const productosCarritoStorage = localStorage.getItem('productosCarrito');
    if (productosCarritoStorage) {
      setProductosCarrito(JSON.parse(productosCarritoStorage));
    }
  }, [localStorage.getItem('productosCarrito')]);

  const eliminarProducto = (id) => {
    const productosCarritoActualizados = productosCarrito.filter((producto) => producto.id !== id);
    setProductosCarrito(productosCarritoActualizados);
    localStorage.setItem('productosCarrito', JSON.stringify(productosCarritoActualizados));
  };

  const total = productosCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  const numeroPedido = Math.floor(Math.random() * 1000000); // Generar un número de pedido aleatorio

  const handlePagar = () => {
    navigate('/pago', { state: { total, numeroPedido } }); // Usa navigate en lugar de history.push
  };

  return (
    <div>
      <div className="titulo-carrito">
      <h2>Carrito de compras</h2>
      <div className="menu">
          <a href="/" className="menu-item">
            <i className="fa fa-home fa-lg"></i> Inicio
          </a>
          <a href="/nosotros" className="menu-item">
            <i className="fa fa-users fa-lg"></i> Nosotros
          </a>
          <a href="/productos" className="menu-item">
            <i className="fa fa-shopping-cart fa-lg"></i> Productos
          </a>
          <a href="/carrito" className="menu-item">
            <i className="fa fa-cart-plus fa-lg"></i> Carrito
          </a>
          <a href="/contacto" className="menu-item">
            <i className="fa fa-envelope fa-lg"></i> Contacto
          </a>
        </div>
      </div>
      <div className="carrito-table-container">
      <table className="carrito-table">
  <thead>
    <tr>
      <th>Imagen</th>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Subtotal</th>
      <th>Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {productosCarrito.map((producto) => (
      <tr key={producto.id}>
        <td> <img src={producto.imagen} alt={producto.nombre} width="100px"/> </td>
        <td> <h3>{producto.nombre}</h3></td> 
        <td><p> ${producto.precio}</p></td>
        <td><p> {producto.cantidad}</p></td>
        <td><p> ${producto.precio * producto.cantidad}</p></td>
        <td>
          <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
        </td>
      </tr>
    ))}
  </tbody>
  <tfoot>
    <tr>
      <td colSpan="3"></td>
      <td><strong style={{ fontSize: '18px' }}>Total de productos: {productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)}</strong></td>
      <td><strong style={{ fontSize: '18px' }}>Total: ${productosCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)}</strong></td>
      <td><a target="_blank" rel="noopener noreferrer">
          <button onClick={handlePagar} style={{ backgroundColor: '#008000', color: '#ffffff', border: 'none', padding: '20px 30px', borderRadius: '5px' }}>Pagar</button>
        </a></td>
    </tr>
  </tfoot>
</table>
</div>
      <Link to="/productos">
    <button>Seguir comprando</button>
  </Link>
  <Inventarios carrito={productosCarrito} />
    </div>
  );
};

export default Carrito;