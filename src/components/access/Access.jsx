import react, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosLogIn } from 'react-icons/io';
import { GiArchiveRegister } from 'react-icons/gi';
import './access.css';

const Access = () => {
  return (
    <>
      <div className='container__access'>
        <NavLink to='/login'>
          <div className='container__access__login'>
            <div className='container__access__login--title'>LOGIN</div>
            <IoIosLogIn className='container__access__login--icon' />
          </div>
        </NavLink>

        <NavLink to='/register'>
          <div className='container__access__register'>
            <div className='container__access__register--title'>REGISTER</div>
            <GiArchiveRegister className='container__access__register--icon' />
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Access;
