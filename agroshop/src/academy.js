import React from 'react';
import './Academy.css';

function Academy() {
  return (
    <div className="Academy">
      <div>
      <h1 class="academy_titulo">
      Aprendizaje y Desarrollo</h1>
      
      </div> 
      <p>Bienvenido a nuestra plataforma de cursos en línea, donde ofrecemos una variedad de programas diseñados para ayudarte a desarrollar nuevas habilidades y avanzar en tu carrera.</p>
      
      <h2 class="academy_sub">Cursos Destacados</h2>
     
      <ul>
        <div>
        <li>
          <h3 class="academy_sub3">Curso de Agricultura Sostenible</h3>
          <img src="https://cdn.pixabay.com/photo/2018/04/05/23/59/nature-3294632_1280.jpg" alt="" className="course-image" />
          <p>Aprende técnicas de agricultura que promueven la sostenibilidad y el respeto por el medio ambiente.</p>
        </li>
        </div>
        <div>

        <li>
          <h3 class="academy_sub3">Gestión de Recursos Naturales</h3>
          <img src="https://cdn.pixabay.com/photo/2022/09/18/08/23/energy-saving-7462465_1280.jpg" alt="" className="course-image" />
          <p>Descubre cómo gestionar eficientemente los recursos naturales para un desarrollo sostenible.</p>
        </li>
        </div>
        <div>
        <li>
          <h3 class="academy_sub3">Tecnologías Emergentes en la Agricultura</h3>
          <img src="https://cdn.pixabay.com/photo/2024/06/18/04/12/modern-farming-8836926_1280.png" alt="" className="course-image" />
          <p>Explora las últimas tecnologías que están transformando el sector agrícola.</p>
        </li>
        </div>
      </ul>
      
      <h2 class="academy_sub">¿Por qué elegirnos?</h2>
      <p>Nuestros cursos están diseñados por expertos en la materia y ofrecen una experiencia de aprendizaje interactiva y práctica. Te ofrecemos:</p>
      <ul>
        <li>Acceso a materiales de estudio de alta calidad.</li>
        <li>Certificados al completar los cursos.</li>
        <li>Soporte continuo de nuestros instructores.</li>
      </ul>

      <h2 class="academy_sub">Inscríbete Ahora</h2>
      <p>No pierdas la oportunidad de mejorar tus habilidades. <a href="/contacto">Inscríbete hoy</a> y comienza tu viaje de aprendizaje con nosotros.</p>
    </div>
  );
}

export default Academy;