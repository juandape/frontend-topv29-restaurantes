import React, { useState } from 'react';
import { useDispatch, useSelector } from '../../store';
import { login } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/auth/local/login`;

function LoginForm() {
  const initialState = {
    email: '',
    password: '',
  };


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


  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem('dataUser'));
    if(!userLocal) return;
    dispatch(login(userLocal));
  }, []);

  useEffect(() => {
    localStorage.setItem('dataUser', JSON.stringify(state.login));
  }, [state.login]);
  console.log(state.login);

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

      dispatch(login(data));
    } catch (error) {
      console.log(error);
    }

    navigate('/');
    setUser(initialState);
    navigate("/");
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
