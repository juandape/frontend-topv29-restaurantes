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
        <div className='container__notfound--text--head'>¡Sorry! Something Went Wrong...</div>
        <div className='container__notfound--text--msg'>
          {' '}
          {error.statusText || error.message}
          {' '}
        </div>
      </div>
    </div>
  );
}

export default NotFound;
