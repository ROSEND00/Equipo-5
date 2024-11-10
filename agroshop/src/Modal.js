// Modal.js
import React from 'react';
import './Modal.css'; // Asegúrate de crear este archivo para los estilos

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    onSubmit();
    onClose(); // Cierra el modal después de enviar
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Pago con Tarjeta</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Número de Tarjeta:</label>
            <input type="text" required />
          </div>
          <div>
            <label>Nombre del Titular:</label>
            <input type="text" required />
          </div>
          <div>
            <label>Fecha de Expiración:</label>
            <input type="month" required min={`${new Date().getFullYear()}-01`} max="2030-12" />
          </div>
          <div>
            <label>Código de Seguridad:</label>
            <input type="text" required />
          </div>
          <button type="submit">Pagar</button>
        </form>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;