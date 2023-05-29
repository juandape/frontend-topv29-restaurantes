import './regform.css';
import React, { useState } from 'react';

const defaultFormValues = { nombre: '', apellido: '', email: '', password: '', cpassword: '' };
function RegisterForm() {
  const [formValues, setFormValues] = useState(defaultFormValues);

  function handleSubmit(event) {
    event.preventDefault();
    setFormValues(defaultFormValues);
    console.log('Form submitted!');
  }

  return (
    <div className='container__register'>
      <form action='' onSubmit={handleSubmit}>
        <div className='container__register__form'>
          <label htmlFor='' className='container__register--label'>
            Nombre
          </label>
          <input
            type='text'
            name='nombre'
            id='nombre'
            className='container__register--input'
            placeholder='Escribe tu nombre'
            value={formValues.nombre}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
          <label htmlFor='' className='container__register--label'>
            Apellido
          </label>
          <input
            type='text'
            name='apellido'
            id='apellido'
            className='container__register--input'
            placeholder='Escribe tu apellido'
            value={formValues.apellido}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
          <label htmlFor='' className='container__register--label'>
            Correo
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='container__register--input'
            placeholder='correo@email.com'
            value={formValues.email}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
          <label htmlFor='' className='container__register--label'>
            Contraseña
          </label>
          <input
            type='password'
            name='pass'
            id='pass'
            className='container__register--input'
            placeholder='Escribe una contraseña'
            value={formValues.password}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
          <label htmlFor='' className='container__register--label'>
            Confirmar contraseña
          </label>
          <input
            type='password'
            name='cpass'
            id='cpass'
            className='container__register--input'
            placeholder='Confirma tu contraseña'
            value={formValues.cpassword}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
        </div>
        <button
          type='submit'
          className='container__register--button'
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
