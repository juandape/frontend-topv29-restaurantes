import LoginForm from './Loginform';
// import './loginformadmin.css';
import React from 'react';

function LoginFormUser() {

  return (
    <div>
      <h2 className='container__login--title'>Iniciar Sesión Usuario</h2>
      <LoginForm />
    </div>
  );
}

export default LoginFormUser;
