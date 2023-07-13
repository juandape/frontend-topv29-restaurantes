import React, { useState } from 'react';
import { useDispatch, useSelector } from '../../store';
import { login } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './loginform.css';
import Swal from 'sweetalert2';

const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/auth/local/login`;
const initialState = {
  email: '',
  password: '',
};

function LoginForm() {
  const state = useSelector();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if(response.status === 200){
      localStorage.setItem('dataUser', JSON.stringify(data));
      Swal.fire({
        icon: 'info',
        title: 'Login Successful',
      });
      navigate('/');
      dispatch(login(data));

      setUser(initialState);
    } else{
      Swal.fire({
        icon: 'info',
        title: 'Failed',
        text: 'Please try again.',
      });
      navigate('/');
    }


    } catch (error) {
      console.log(error);
    }


  };




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
            name='email'
            className='container__login--input'
            placeholder='your email'
            onChange={handleChange}
            value={user.email}
            required
          />
          <label htmlFor='' className='container__login--label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='container__login--input'
            placeholder='your password'
            onChange={handleChange}
            value={user.password}
            required
          />
        </div>
        <button type='submit' className='container__login--button'>
          Login
        </button>
        <div className='container__login--forgot'>
          <a href='' className='container__login--a'>
            ¿Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
