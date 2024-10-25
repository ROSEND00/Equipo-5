import React, { useEffect } from 'react';
import './Contacto.css'; // Asegúrate de crear un archivo CSS para los estilos
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contacto() {
  useEffect(() => {
    // Cargar el script de LiveChat
    window.__lc = window.__lc || {};
    window.__lc.license = 18765399; // Reemplaza con tu número de licencia

    // Crear y agregar el script de LiveChat al documento
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.livechatinc.com/tracking.js';
    
    // Agregar el script al head del documento
    document.head.appendChild(script);

    // Limpiar el efecto (opcional)
    return () => {
      document.head.removeChild(script);
    };
  }, []);


  return (
    <div className="contacto-container">
      <div className="titulo-contacto">
        <img 
          src="https://i.postimg.cc/MGcGmYcj/Logo-App.png" 
          alt="Imagen de Contacto" 
          className="imagen-titulo"
        />
        <h2>Contacto</h2>
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

      <div className="informacion">
        <h3>Datos de Domicilio</h3>
        <p>
          AgroShop S.A.<br />
          Calle Martín 42<br />
          Guadalajara, Jalisco<br />
          Código Postal: 47800
        </p>
      </div>

      <div className="mapa-ubicacion">
        <h3>Ubicación</h3>
        <iframe 
          title="Mapa de Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25113.658364260333!2d-103.35003368198647!3d20.66275722675641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1728793504496!5m2!1ses-419!2smx"
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

      <div className="formulario-contacto">
        <h3>Formulario de Contacto</h3>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="mensajeria-instantanea">
        <h3>¿Tienes preguntas? ¡Contáctanos por WhatsApp!</h3>
        <a 
          href="https://wa.me/3751265642" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-link"
        >
          <button className="whatsapp-button">
            Enviar Mensaje
          </button>
        </a>
      </div>

      
      
      

      <div className="redes-sociales">
    <h4>Síguenos en nuestras redes sociales:</h4>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="redes-item">
      <i className="fab fa-facebook fa-lg"></i>
    </a>
    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="redes-item">
      <i className="fab fa-twitter fa-lg"></i>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="redes-item">
      <i className="fab fa-instagram fa-lg"></i>
    </a>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="redes-item">
      <i className="fab fa-linkedin fa-lg"></i>
    </a>
  </div>
    </div>
  );
}

export default Contacto;