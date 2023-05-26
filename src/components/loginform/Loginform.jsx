import './loginform.css';
import React, { useState } from 'react';

const defaultFormValues = { email: '', password: '' };
function LoginForm() {
  const [formValues, setFormValues] = useState(defaultFormValues);
  function handleSubmit(event) {
    event.preventDefault();
    setFormValues(defaultFormValues);
    console.log('login submitted!');
  }

  return (
    <div className='container__login'>
      <form action='' onSubmit={handleSubmit}>
        <div className='container__login--form'>
          <label htmlFor='' className='container__login--label'>
            Correo
          </label>
          <input
            type='email'
            name='emaill'
            id='emaill'
            className='container__login--input'
            placeholder='Ingresa tu email'
            value={formValues.email}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
          <label htmlFor='' className='container__login--label'>
            Contraseña
          </label>
          <input
            type='password'
            name='passl'
            id='passl'
            className='container__login--input'
            placeholder='Ingresa tu contraseña'
            value={formValues.password}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='container__login--button'>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
