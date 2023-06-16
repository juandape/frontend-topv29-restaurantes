import React, { useState } from 'react';
import './loginform.css';

export const defaultFormValues = { email: '', password: '' };
function LoginForm({handleSubmit}) {
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
      </form>
      <div className='container__login--forgot'>Forgot your password?</div>
    </div>
  );
}

export default LoginForm;
