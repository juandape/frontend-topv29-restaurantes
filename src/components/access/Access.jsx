import react, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosLogIn } from 'react-icons/io';
import { GiArchiveRegister } from 'react-icons/gi';
import './access.css';

const Access = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const toggleRegister = () => setDropdown1(!dropdown1);
  return (
    <>
      <div className='container__access'>
        <NavLink to='/login'>
          <div className='container__access__login'>
            <div className='container__access__login--title'>LOGIN</div>
            <IoIosLogIn className='container__access__login--icon' />
          </div>
        </NavLink>

        <div className='container__access__register' onClick={toggleRegister}>
          <div className='container__access__register--title'>REGISTER</div>
          <GiArchiveRegister className='container__access__register--icon' />
          {dropdown1 && (
            <div>
              <NavLink to='/regadmin'>
                <div
                  className='container__access__register--textad'
                  role='button'
                  onClick={toggleRegister}
                >
                  Admin
                </div>
              </NavLink>
              <NavLink to='/reguser'>
                <div
                  className='container__access__register--textus'
                  role='button'
                  onClick={toggleRegister}
                >
                  User
                </div>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Access;
