import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Academy.css';

function Academy() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '', // Nuevo campo para el curso elegido
  });

  const [message, setMessage] = useState(''); // Estado para el mensaje de envío

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_a6zlytn', 'template_xhtpaif', formData, 'P3oEfq3688bxT6zZP')
    .then((response) => {
      console.log('Correo enviado!', response.status, response.text);
      setMessage('¡Correo enviado con éxito!'); 

      // Puedes agregar un mensaje de éxito aquí
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error);
      setMessage('Error al enviar el correo. Inténtalo de nuevo.'); // Mensaje de error
      // Puedes agregar un mensaje de error aquí
    });

  };

  return (
    <div className="Academy">
      <div>
      <h1 className="academy_titulo">
      Aprendizaje y Desarrollo</h1>
      
      </div> 
      <p>Bienvenido a nuestra plataforma de cursos en línea, donde ofrecemos una variedad de programas diseñados para ayudarte a desarrollar nuevas habilidades y avanzar en tu carrera.</p>
      
      <h2 className="academy_sub">Cursos Destacados</h2>
     
      <ul>
        <div>
        <li>
          <h3 className="academy_sub3">Curso de Agricultura Sostenible</h3>
          <img src="https://cdn.pixabay.com/photo/2018/04/05/23/59/nature-3294632_1280.jpg" alt="" className="course-image" />
          <p>Aprende técnicas de agricultura que promueven la sostenibilidad y el respeto por el medio ambiente.</p>
        </li>
        </div>
        <div>

        <li>
          <h3 className="academy_sub3">Gestión de Recursos Naturales</h3>
          <img src="https://cdn.pixabay.com/photo/2022/09/18/08/23/energy-saving-7462465_1280.jpg" alt="" className="course-image" />
          <p>Descubre cómo gestionar eficientemente los recursos naturales para un desarrollo sostenible.</p>
        </li>
        </div>
        <div>
        <li>
          <h3 className="academy_sub3">Tecnologías Emergentes en la Agricultura</h3>
          <img src="https://cdn.pixabay.com/photo/2024/06/18/04/12/modern-farming-8836926_1280.png" alt="" className="course-image" />
          <p>Explora las últimas tecnologías que están transformando el sector agrícola.</p>
        </li>
        </div>
      </ul>
      
      <h2 className="academy_sub">¿Por qué elegirnos?</h2>
      <p>Nuestros cursos están diseñados por expertos en la materia y ofrecen una experiencia de aprendizaje interactiva y práctica. Te ofrecemos:</p>
      <ul>
        <li>Acceso a materiales de estudio de alta calidad.</li>
        <li>Certificados al completar los cursos.</li>
        <li>Soporte continuo de nuestros instructores.</li>
      </ul>

      <h2 className="academy_sub">Inscríbete Ahora</h2>
      <p>No pierdas la oportunidad de mejorar tus habilidades. <a>Inscríbete Aquí</a> y comienza tu viaje de aprendizaje con nosotros.</p>

      {message && <div className="message">{message}</div>}

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Curso Elegido:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">Enviar</button>
      </form>
    
    </div>
  );
}

export default Academy;