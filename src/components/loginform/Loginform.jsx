import React, { useState } from 'react';
import './loginform.css';
import { useSelector } from '../../store';

export const defaultFormValues = { email: '', password: '' };
function LoginForm({handleSubmit}) {

  const state = useSelector();

  console.log(state.login)


  const [formValues, setFormValues] = useState(defaultFormValues);
  function handleSubmit(event) {
    event.preventDefault();
    alert('login submitted!');
    setFormValues(defaultFormValues);
  }

  return (
    <div className='container__login'>
      <h1 className='container__login--title'>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className='container__login--form'>
          <label htmlFor='' className='container__login--label'>
            Email
          </label>
          <input
            type='email'
            name='emaill'
            id='emaill'
            className='container__login--input'
            placeholder='your email'
            value={formValues.email}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
          <label htmlFor='' className='container__login--label'>
            Password
          </label>
          <input
            type='password'
            name='passl'
            id='passl'
            className='container__login--input'
            placeholder='your password'
            value={formValues.password}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='container__login--button'>
          Login
        </button>
      <div className='container__login--forgot'>¿Forgot password?</div>
      </form>
    </div>
  );
}

export default LoginForm;
