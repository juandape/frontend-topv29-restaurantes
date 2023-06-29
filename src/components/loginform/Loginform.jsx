import React, { useState } from 'react';
import './loginform.css';
import { useDispatch, useSelector } from '../../store';

import { login } from '../../store/actions';
import { useEffect } from 'react';


function LoginForm() {

  const initialState = {
    email: '',
    password: '',
  };

  const state = useSelector();
  const dispatch = useDispatch();

  const [ user, setUser] = useState(initialState);

  const handleChange=(event)=>{

    const {name,value}=event.target;
    setUser(
      {
        ...user,
        [name]: value ,

      })

  };


  useEffect(()=>{
    const UserLocal = JSON.parse(localStorage.getItem('dataUser'));
    dispatch( login(UserLocal));
   },[]);


  useEffect(()=>{
    localStorage.setItem('dataUser',JSON.stringify(state.login));
   },[state.login]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
      const url = `https://api-restaurants-lpjo.onrender.com/auth/local/login`

      const response = await fetch(url, options)
      const data = await response.json()
      dispatch( login(data));
    } catch (error) {
      console.log(error)
    }

    setUser(initialState);


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
      <div className='container__login--forgot'>¿Forgot password?</div>
      </form>
    </div>
  );
}

export default LoginForm;
