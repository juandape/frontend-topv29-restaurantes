/* eslint-disable jsx-quotes */
import { useRouteError } from 'react-router-dom';
import React from 'react';
import './notfound.css';

function NotFound() {
  const error = useRouteError();

  return (
    <div className='container__notfound'>
      <img
        src='\images\dog.jpg'
        alt='dog'
        className='container__notfound--img'
      />
      <h1 className='container__notfound--title'>404</h1>
      <div className='container__notfound--text'>
        <p>Ups! sorry, something went wrong...</p>
        <p>
          {' '}
          {error.statusText || error.message}
          {' '}
        </p>
      </div>
    </div>
  );
}

export default NotFound;
