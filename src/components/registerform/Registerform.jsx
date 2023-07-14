import React, { useState } from 'react';
import './regform.css';
import Swal from 'sweetalert2';
const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/users`;
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../store';
import { setLoading } from '../../store/actions';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';

function RegisterForm() {

  const state = useSelector();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const initialconfirm = {
    passConfirme: '',
  };


  const [user, setUser] = useState(initialState);
  const [confirmPasword, setConfirmPasword] = useState(initialconfirm);
  const [error, setError] = useState({});

  const handleChangepassword = (event) => {
    const { name, value } = event.target;
    setConfirmPasword({
      ...confirmPasword,
      [name]: value,
    });

    validateForm(event);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
    validateForm(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();
    console.log(isValid);
    if (isValid) {
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
        console.log(data);
        Swal.fire({
          icon: 'info',
          title: 'created your account',
          text: 'Please Verify your email to enjoy all services that we have for you, start now!',
        });
        navigate('/');
      } catch (error) {
        console.log(error);
      } finally {
        // disparar la accion del loading = false
        dispatch(setLoading(false));
      }


      setUser(initialState);
      setConfirmPasword(initialconfirm);
    } else {
      Swal.fire('Passwords not match');
    }
  };

  const validateForm = () => {
    const { password } = user;
    const { passConfirme } = confirmPasword;
    const error = {};
    if (password !== passConfirme) {
      error.passConfirme = 'Passwords do not match';
    }
    setError(error);
    return Object.keys(error).length === 0;
  };

  return (
    <div className='container__register'>
      <h1 className='container__register--title'>Register</h1>
      {state.isLoading ?
      (
        <UseAnimations animation={loading} size={56} wrapperStyle={{marginTop: '100px'}} strokeColor='orange' />

      )
        :(
      <form action='' onSubmit={handleSubmit}>
        <div className='container__register__form'>
          <div className='container__register--box'>
            <label htmlFor='' className='container__register--label-s'>
              FirstName
            </label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              className='container__register--input'
              placeholder='firstName'
              value={user.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='container__register--box'>
            <label htmlFor='' className='container__register--label'>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              className='container__register--input'
              placeholder='your last name'
              value={user.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='container__register--box'>
            <label htmlFor='' className='container__register--label-s'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='container__register--input'
              placeholder='email@dot.com'
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='container__register--box'>
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
              value={user.password}
              onChange={handleChange}
              onBlur={validateForm}
            />
            {error.password && <span>{error.password}</span>}
          </div>
          <div className='container__register--box'>
            <label htmlFor='' className='container__register--label-l'>
              Confirm password
            </label>
            <input
              type='password'
              name='passConfirme'
              id='cpass'
              className='container__register--input'
              placeholder='confirm your password'
              required
              minLength={5}
              value={confirmPasword.passConfirme}
              onChange={handleChangepassword}
              onBlur={validateForm}
            />
            {/* {error.confirmPassword && <span>{error.confirmPassword}</span>} */}
          </div>
        </div>
        <button type='submit' className='container__register--button'>
          Register
        </button>
      </form> )}
    </div>
  );
}

export default RegisterForm;
