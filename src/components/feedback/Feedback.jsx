import React, { useState } from 'react';
import './feedback.css';
import Star from '../Star/Star';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar los datos del comentario antes de agregarlo
    if (email.trim() === '' || content.trim() === '') {
      alert('Please, insert your email and comment.');
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
    setEmail('');
    setContent('');
  };

  return (
    <>
    <div className='container__comments'>
      <Star />
      <h2 className='container__comments--title'>Give Us A Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className='container__comments--form'>
          <label htmlFor='name' className='container__comments--label'>
            Email:
          </label>
          <input
            type='email'
            id='name'
            className='container__comments--input'
            placeholder='Your email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
      </div>
      </>
  );
};

export default Feedback;
