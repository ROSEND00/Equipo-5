import React, { useState } from 'react';
import './Empleo.css';

const vacantes = [
  {
    titulo: "Desarrollador Frontend",
    detalles: "Buscamos un desarrollador frontend con experiencia en React y CSS. Debe ser capaz de trabajar en equipo y tener buenas habilidades de comunicación."
  },
  {
    titulo: "Diseñador Gráfico",
    detalles: "Se requiere diseñador gráfico con experiencia en Adobe Creative Suite. Debe tener un buen portafolio y ser creativo."
  },
  {
    titulo: "Gerente de Proyectos",
    detalles: "Buscamos un gerente de proyectos que tenga experiencia liderando equipos y gestionando proyectos de tecnología."
  },
  {
    titulo: "Analista de Marketing",
    detalles: "Se busca analista de marketing con habilidades en SEO y marketing digital. Debe ser analítico y proactivo."
  }
];

function Empleo() {
  const [showPopup, setShowPopup] = useState(false);
  const [vacanteSeleccionada, setVacanteSeleccionada] = useState(null);

  const handleVacanteClick = (vacante) => {
    setVacanteSeleccionada(vacante);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setVacanteSeleccionada(null);
  };

  return (
    <div className="Empleo">
      <h1 className="titulo-empleo">Trabaja con nosotros</h1>
      <h2 className="subtitulo-empleo">Vacantes Disponibles</h2>
      <ul className="lista-vacantes">
        {vacantes.map((vacante, index) => (
          <li key={index} onClick={() => handleVacanteClick(vacante)}>
            {vacante.titulo}
          </li>
        ))}
      </ul>
      <h2 className="subtitulo-empleo">¿Por qué trabajar con nosotros?</h2>
      <p>
        Únete a nuestro equipo y forma parte de una empresa innovadora que valora la creatividad, el trabajo en equipo y el desarrollo profesional. Ofrecemos un ambiente dinámico y oportunidades de crecimiento.
      </p>
      <h2 className="subtitulo-empleo">Cómo aplicar</h2>
      <p>
        Si estás interesado en alguna de nuestras vacantes, envíanos tu CV y carta de presentación a <a href="mailto:empleo@agroshop.com">empleo@agroshop.com</a>.
      </p>

      {showPopup && vacanteSeleccionada && (
        <div className="popup">
          <div className="popup-content">
            <h2>{vacanteSeleccionada.titulo}</h2>
            <p>{vacanteSeleccionada.detalles}</p>
            <button className="close-button" onClick={handleClosePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Empleo;