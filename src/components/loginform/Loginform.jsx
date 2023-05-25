import './loginform.css';
import React from 'react';

function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('login submitted!');
  }

  return (
    <div className='container__login'>
      {/* <h2 className='container__login--title'>Iniciar Sesión Administrador</h2> */}
      <form action=''>
        <div className='container__login--form'>
          <label htmlFor='' className='container__login--label'>Correo</label>
          <input type='email' name='emaill' id='emaill' className='container__login--input' required/>
          <label htmlFor='' className='container__login--label'>Contraseña</label>
          <input type='password' name='passl' id='passl' className='container__login--input' required/>
        </div>
        <button type='submit' onClick={handleSubmit} className='container__login--button'>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
