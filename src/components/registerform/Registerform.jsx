import './regform.css';
import React, { useState } from 'react';

function RegisterForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!');
  }

  return (
    <div className='container__register'>
      {/* <h2 className='container__registeradmin--title'>
        Registro Administrador
      </h2> */}
      <form action=''>
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
            required
          />
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='container__register--button'
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;

