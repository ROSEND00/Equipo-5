import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Modal from './Modal';
import './Pago.css'; 

const Pago = () => {
  const location = useLocation();
  const { total, numeroPedido } = location.state || { total: 0, numeroPedido: 'N/A' };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitPayment = () => {
    // Aquí puedes manejar el proceso de pago
    alert('Pago procesado!');
  };

  const handleOpenTransferencia = () => {
    // Abre una nueva ventana con los datos de cuenta
    const transferenciaWindow = window.open('', '_blank', 'width=400,height=400');
    transferenciaWindow.document.write(`
      <html>
        <head>
          <title>Datos de Cuenta de Agroshop</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2 { color: #333; }
            p { margin: 5px 0; }
          </style>
        </head>
        <body>
          <h2>Datos de Cuenta de Agroshop</h2>
          <p><strong>Banco:</strong> Banco Ejemplo</p>
          <p><strong>Cuenta:</strong> 1234567890</p>
          <p><strong>Nombre del Titular:</strong> Agroshop S.A.</p>
          <p><strong>Tipo de Cuenta:</strong> Ahorros</p>
          <p><strong>Swift:</strong> ABCD1234</p>
          <p><strong>Referencia:</strong> Por favor, incluye tu número de pedido.</p>
        </body>
      </html>
    `);
    transferenciaWindow.document.close(); // Cierra el documento para renderizar
  };

  return (
    <div className="container">
      <h2 className="title">Resumen de Pago</h2>
      <p>Número de pedido: {numeroPedido}</p>
      <p className="total">Total a pagar: {total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
      <h3>Opciones de pago</h3>
      <div className="button-container">
        <button className="button" onClick={handleOpenModal}>Tarjeta de Crédito</button>
        <button className="button" onClick={handleOpenModal}>Tarjeta de Débito</button>
        <button className="button" onClick={handleOpenTransferencia}>Transferencia Bancaria</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/carrito">
          <button className="button">Volver al Carrito</button>
        </Link>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleSubmitPayment} 
      />
    </div>
  );
};

export default Pago;