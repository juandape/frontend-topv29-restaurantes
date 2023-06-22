import React, { useState } from 'react';
import './regform.css';

const defaultFormData = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function RegisterForm() {
  const [formData, setFormData] = useState(defaultFormData);
  const [error, setError] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateForm(event);
  }

  const validateForm = () => {
    const { password, confirmPassword } = formData;
    const error = {};
    if (password !== confirmPassword) {
      error.confirmPassword = 'Passwords do not match';
    }
    setError(error);
    return Object.keys(error).length === 0;
  };

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      alert('Form submitted successfully');
      setFormData(defaultFormData);
    } else {
      alert('Passwords not match');
    }
  }

  return (
    <div className='container__register'>
      <h1 className='container__register--title'>Register</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className='container__register__form'>
          <div>
            <label htmlFor='' className='container__register--label-s'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='container__register--input'
              placeholder='your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='' className='container__register--label'>
              Last Name
            </label>
            <input
              type='text'
              name='lastname'
              id='lastname'
              className='container__register--input'
              placeholder='your last name'
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='' className='container__register--label-s'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='container__register--input'
              placeholder='email@dot.com'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='' className='container__register--label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='pass'
              className='container__register--input'
              placeholder='your password'
              required
              minLength={5}
              value={formData.password}
              onChange={handleChange}
              onBlur={validateForm}
            />
            {error.password && <span>{error.password}</span>}
          </div>
          <div>
            <label htmlFor='' className='container__register--label-l'>
              Confirm password
            </label>
            <input
              type='password'
              name='confirmPassword'
              id='cpass'
              className='container__register--input'
              placeholder='confirm your password'
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={validateForm}
            />
            {/* {error.confirmPassword && <span>{error.confirmPassword}</span>} */}
          </div>
        </div>
        <button type='submit' className='container__register--button'>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
