import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <h1><img src="https://i.postimg.cc/MGcGmYcj/Logo-App.png" alt="Logo de la aplicación"/></h1>
      <h2>Bienvenidos</h2>
      <div className="menu">
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
</div>
    </div>
  );
}

export default App;
