import React, { useState } from 'react';
import { useDispatch, useSelector } from '../../store';
import { login,setLoading } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import './loginform.css';
import Swal from 'sweetalert2';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';

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
      dispatch(setLoading(true));
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
    } finally {
      // isLogin = false
      dispatch(setLoading(false));
    }


  };




  return (
    <div className='container__login'>
      <h1 className='container__login--title'>Login</h1>
      {state.isLoading ?
      (
        <UseAnimations animation={loading} size={56} wrapperStyle={{marginTop: '100px'}} strokeColor='orange' />
      )
        :(<form action='' onSubmit={handleSubmit}>
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
      </form>)}

    </div>
  );
}

export default LoginForm;
