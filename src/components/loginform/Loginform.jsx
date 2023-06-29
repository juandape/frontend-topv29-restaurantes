import React, { useState } from 'react';
import './loginform.css';
import { useDispatch, useSelector } from '../../store';
import { login } from '../../store/actions';


function LoginForm() {

  const state = useSelector();
  const dispatch = useDispatch();

  const [ user, setUser] = useState({});

  const handleChange=(event)=>{

    const {name,value}=event.target;
    setUser(
      {
        ...user,
        [name]: value ,

      })

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user)



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
      console.log(data)
      dispatch( login(data));
    } catch (error) {
      console.log(error)
    }

    //dispatch( session(data));


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
