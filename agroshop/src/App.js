import React, { useEffect } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
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
    <div className="App">
      <h1><img src="https://i.postimg.cc/MGcGmYcj/Logo-App.png" alt="Logo de la aplicación"/></h1>
      <h2>Bienvenidos</h2>
      <div className="menu_principal">
  <NavLink to="/nosotros">
    <div className="square red">
    <img src="https://cdn.pixabay.com/photo/2020/03/23/00/45/coffee-4958997_1280.jpg" alt="" />
    <h2></h2>
    </div>
  </NavLink>
  <NavLink to="/productos">
    <div className="square blue">
    <img src="https://cdn.pixabay.com/photo/2019/09/06/20/56/corn-4457379_960_720.jpg" alt="" />
    <h2></h2>
    </div>
  </NavLink>
  <NavLink to="/carrito">
    <div className="square green">
    <img src="https://cdn.pixabay.com/photo/2015/12/07/14/11/shopping-cart-1080840_1280.jpg" alt="" />
    <h2></h2>
    </div>
  </NavLink>
  <NavLink to="/contacto">
    <div className="square yellow">
    <img src="https://cdn.pixabay.com/photo/2022/01/29/13/40/smartphone-6977553_1280.jpg" alt="" />
    <h2></h2>
    </div>
  </NavLink>
  <NavLink to="/academy">
    <div className="square gris">
    <img src="https://cdn.pixabay.com/photo/2020/11/08/03/05/rice-5722754_1280.jpg" alt="" />
    <h2></h2>
    </div>
  </NavLink>
  <NavLink to="/empleo">
    <div className="square morado">
    <img src="https://cdn.pixabay.com/photo/2021/08/19/08/35/handshake-6557378_1280.jpg" alt="" />
    <h2></h2>
    </div>
  </NavLink>
</div>
<h3>Nuestros Socios Comerciales</h3>
      <div className="gallery">
        <img src="https://i.postimg.cc/3RqK5kBZ/pngwing-com.png" alt="Socio 1" />
        <img src="https://i.postimg.cc/d3vDSktS/klipartz-com-5.png" alt="Socio 2" />
        <img src="https://i.postimg.cc/GmyngvXL/klipartz-com-6.png" alt="Socio 3" />
        <img src="https://i.postimg.cc/MZMxNkPb/klipartz-com-7.png" alt="Socio 4" />
        <img src="https://i.postimg.cc/kGJJRwPM/klipartz-com-9.png" alt="Socio 5" />
      </div>
      <h3>Espacio Publicitario</h3>
      <div className="video-container">
  <video controls autoPlay muted>
    <source src="/VIDEO_PUBLICITARIO.mp4" type="video/mp4" />
    Tu navegador no soporta el elemento de video.
  </video>
</div>
    </div>
    
  );
}

export default App;
