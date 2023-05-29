import React, { useState } from 'react';
import './comentarios.css';

const CrearComentario = () => {
  const [nombre, setNombre] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar los datos del comentario antes de agregarlo
    if (nombre.trim() === '' || contenido.trim() === '') {
      alert('Por favor, ingresa un nombre y contenido para el comentario.');
      return;
    }

    // Crear un objeto de comentario con los datos
    const nuevoComentario = {
      nombre,
      contenido,
      fecha: new Date().toISOString(),
    };
    console.log(nuevoComentario);

    // Limpiar los campos del formulario
    setNombre('');
    setContenido('');
  };

  return (
    <div className='container__comments'>
      <h2 className='container__comments--title'>Cuentanos tu opinión</h2>
      <form onSubmit={handleSubmit}>
        <div className='container__comments--form'>
          <label htmlFor='nombre' className='container__comments--label'>
            Nombre:
          </label>
          <input
            type='text'
            id='nombre'
            className='container__comments--input'
            placeholder='Escribe tu nombre'
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
          <label htmlFor='contenido' className='container__comments--label'>
            Comentario:
          </label>
          <textarea
            id='contenido'
            className='container__comments--textarea'
            placeholder='Escribe tu comentario'
            value={contenido}
            onChange={(event) => setContenido(event.target.value)}
          ></textarea>
        </div>
        <button type='submit' className='container__comments--button'>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CrearComentario;
