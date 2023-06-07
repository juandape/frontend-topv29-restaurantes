import react, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './access.css';

const Access = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const toggleLogin = () => setDropdown(!dropdown);
  const toggleRegister = () => setDropdown1(!dropdown1);
  return (
    <>
      <div className='container__access'>
        <div className='container__access__login' onClick={toggleLogin}>
          <div className='container__access__login--title'>LOGIN</div>
          {dropdown && (
            <div>
              <NavLink to='/loginadmin'>
                <div
                  className='container__access__login--textad'
                  role='button'
                  onClick={toggleLogin}
                >
                  Admin
                </div>
              </NavLink>
              <NavLink to='/loginuser'>
                <div
                  className='container__access__login--textus'
                  role='button'
                  onClick={toggleLogin}
                >
                  User
                </div>
              </NavLink>
            </div>
          )}
        </div>

        <div
          className='container__access__register'
          onClick={toggleRegister}
        >
          <div className='container__access__register--title'>
            REGISTER
          </div>
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
