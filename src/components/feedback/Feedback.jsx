import React, { useState } from 'react';
import './feedback.css';
import Star from '../Star/Star';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [formData, setFormData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtener los datos del formulario
    const name = event.target.name.value;
    const content = event.target.content.value;

    // Crear un objeto de comentario con los datos
    const newFeedback = {
      name,
      content,
      date: new Date().toString(),
    };
    console.log(newFeedback);

    setFormData([...formData, newFeedback]);

    // Limpiar los campos del formulario
    setEmail('');
    setName('');
    setContent('');
  };

  return (
    <>
      <div className='container__comments'>
        <h2 className='container__comments--title'>Give Us A Feedback</h2>
        <Star />
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
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label htmlFor='email' className='container__comments--label'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              className='container__comments--input'
              placeholder='Your email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
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
              required
            ></textarea>
          </div>
          <button type='submit' className='container__comments--button'>
            Send
          </button>
        </form>
      </div>
      <div className='container__comments__overview'>
        <h2 className='container__comments--title'>Comments</h2>
        <div className='container__comments--comment'>
          <p>best Food Ever, and love you can bring your pet</p>
          <p>By: jose</p>
          <p>-------------------------------------------------</p>
          <p>enjoy everything. Full recommended</p>
          <p>By: maria</p>
          <p>-------------------------------------------------</p>
          <div>
            {formData.map((feedback) => (
              <div key={feedback.date}>
                <p>{feedback.content}</p>
                <p>By: {feedback.name}</p>
                <p>-------------------------------------------------</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
