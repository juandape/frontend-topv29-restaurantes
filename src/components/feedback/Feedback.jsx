import React, { useState } from 'react';
import './feedback.css';
import Star from '../Star/Star';

const Feedback = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar los datos del comentario antes de agregarlo
    if (name.trim() === '' || content.trim() === '') {
      alert('Please, insert your name and comment.');
      return;
    }

    // Crear un objeto de comentario con los datos
    const newFeedback = {
      name,
      content,
      date: new Date().toISOString(),
    };
    console.log(newFeedback);

    // Limpiar los campos del formulario
    setName('');
    setContent('');
  };

  return (
    <>

    <div className='container__comments'>

      <h2 className='container__comments--title'>Give Us A Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className='container__comments--form'>
          <label htmlFor='name' className='container__comments--label'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            className='container__comments--input'
            placeholder='Your name'
            value={name}
            onChange={(event) => setNombre(event.target.value)}
          />
          <label htmlFor='content' className='container__comments--label'>
            Feedback:
          </label>
          <textarea
            id='content'
            className='container__comments--textarea'
            placeholder='Your feedback'
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <button type='submit' className='container__comments--button'>
          Send
        </button>
      </form>
      <Star />
      </div>


      </>
  );
};

export default Feedback;
