import React, { useState } from 'react';
import './regform.css';

const defaultFormData = {
  fullname: '',
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
    if (password.length < 6) {
      error.password = 'Password should be at least 6 characters long';
    }
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
    alert('Password does not match');
  }

  }

  return (
    <div className='container__register'>
      <form action='' onSubmit={handleSubmit}>
        <div className='container__register__form'>
          <div>
            <label htmlFor='' className='container__register--label'>
              Full Name
            </label>
            <input
              type='text'
              name='fullname'
              id='fullname'
              className='container__register--input'
              placeholder='your fullname'
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='' className='container__register--label'>
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
              value={formData.password}
              onChange={handleChange}
              onBlur={validateForm}
            />
            {error.password && <span>{error.password}</span>}
          </div>
          <div>
            <label htmlFor='' className='container__register--label'>
              Confirm password
            </label>
            <input
              type='password'
              name='confirmPassword'
              id='cpass'
              className='container__register--input'
              placeholder='confirm your password'
              re
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
