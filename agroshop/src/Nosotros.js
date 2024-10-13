import React from 'react';

function Nosotros() {
  return (
    <div className="about-us">
      <div className="hero">
        <h2 className="title">Nosotros</h2>
        <img src="https://i.postimg.cc/Mp2pWJpq/agricultural-landscape-1500x500.png" alt="Imagen de fondo" />
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
      <div className="description-container">
        <h3>Descripción</h3>
        <p>
          Somos una plataforma digital especializada en la venta de insumos y herramientas destinadas a apoyar a agricultores, jardineros y personas interesadas en el cultivo. En esta tienda, los clientes pueden encontrar una amplia gama de productos como semillas, fertilizantes, pesticidas, herramientas de cultivo, equipos de riego, maquinaria agrícola, así como suplementos para el cuidado del suelo y plantas.
        </p>
        <p>
          El sitio ofrece una experiencia de compra fácil y conveniente, con un diseño intuitivo que permite a los usuarios buscar por categoría, tipo de cultivo o necesidad específica. Cada producto incluye descripciones detalladas, recomendaciones de uso y opiniones de otros compradores, lo que facilita la toma de decisiones informadas.
        </p>
      </div>
      <div className="history-container">
        <h3>Nuestra Historia</h3>
        <img src="https://i.postimg.cc/RhqCsMVx/1950s-scene-1500x350.png" alt="Imagen de los fundadores" />
        <p>
          Hace más de una década, un grupo de agricultores apasionados por el campo y el crecimiento sostenible se unió con una visión clara: hacer que los insumos agrícolas de alta calidad fueran accesibles para todos, sin importar la distancia o las limitaciones geográficas. Así nació nuestra tienda en línea, con el compromiso de conectar a pequeños y grandes productores con los mejores agroquímicos del mercado, de manera rápida, segura y eficiente.
        </p>
        <p>
          Con el tiempo, nuestra tienda creció gracias a la confianza de miles de clientes que compartían nuestra pasión por la agricultura. Nos esforzamos por no solo ofrecer productos de alta calidad, sino también por acompañar a nuestros clientes en cada paso de su camino.
        </p>
      </div>
      <div className="mission-container">
        <h3>Misión</h3>
        <p>
          Nuestra misión es proporcionar a los agricultores soluciones agroquímicas de alta calidad, accesibles y sostenibles, que optimicen el rendimiento de sus cultivos y promuevan una agricultura más eficiente. A través de nuestra plataforma en línea, buscamos facilitar el acceso a productos especializados, acompañando a nuestros clientes con asesoramiento técnico y un servicio excepcional, siempre comprometidos con el crecimiento del sector agrícola y el cuidado del medio ambiente.
        </p>
      </div>
      <div className="vision-container">
        <h3>Visión</h3>
        <p>
          Ser la tienda en línea líder en la venta de agroquímicos a nivel nacional, reconocida por nuestra innovación, calidad y compromiso con el éxito de nuestros clientes. Aspiramos a convertirnos en un referente en el sector agrícola, ofreciendo no solo productos de vanguardia, sino también soluciones sostenibles que impulsen el desarrollo de una agricultura más responsable y eficiente para las generaciones futuras.
        </p>
      </div>
    </div>
  );
}

export default Nosotros;