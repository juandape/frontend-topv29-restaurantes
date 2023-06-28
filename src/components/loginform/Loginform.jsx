import React, { useState } from 'react';
import './loginform.css';
import { useDispatch, useSelector } from '../../store';
import { session } from '../../store/actions';


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

  const handleSubmit = (event) => {

    event.preventDefault();
    dispatch( session(user.emaill));
    console.log(user.emaill)
  };




  console.log(state.login.profile.fullName)



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
            name='passl'
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
