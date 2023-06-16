import './regform.css';
import React, { useState } from 'react';

const defaultFormValues = {
  fullname: '',
  email: '',
  password: '',
  confirmPassword: '',
};
function RegisterForm() {
  const [formValues, setFormValues] = useState(defaultFormValues);

  //verificacion de contraseñas

  function handleSubmit(event) {
    event.preventDefault();
    setFormValues(formValues)

  }

  return (
    <div className='container__register'>
      <form action='' onSubmit={handleSubmit}>
        <div className='container__register__form'>
          <label htmlFor='' className='container__register--label'>
            Full Name
          </label>
          <input
            type='text'
            name='fullname'
            id='fullname'
            className='container__register--input'
            placeholder='your fullname'
            value={formValues.fullname}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
          <label htmlFor='' className='container__register--label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='container__register--input'
            placeholder='email@dot.com'
            value={formValues.email}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
          <label htmlFor='' className='container__register--label'>
            Password
          </label>
          <input
            type='password'
            name='pass'
            id='pass'
            className='container__register--input'
            placeholder='your password'
            value={formValues.password}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
          <label htmlFor='' className='container__register--label'>
            Confirm password
          </label>
          <input
            type='password'
            name='cpass'
            id='cpass'
            className='container__register--input'
            placeholder='confirm your password'
            value={formValues.confirmPassword}
            onChange={(e) => setFormValues(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='container__register--button'>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
