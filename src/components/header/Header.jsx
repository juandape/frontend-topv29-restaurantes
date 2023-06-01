import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const[dropdown1, setDropdown1] = useState(false);
  const toggleLogin = () => setDropdown(!dropdown);
  const toggleRegister = () => setDropdown1(!dropdown1);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='header-container'>
        <div className='header-container__logo'>@</div>
        <div className={`header-container__items ${isOpen && 'open'}`}>
          <div>
            <NavLink to='/'> HOME </NavLink>
          </div>
          <div>
            <NavLink to='/'> RESTAURANT </NavLink>
          </div>
          <div>
            <NavLink to='/'> PAGES </NavLink>
          </div>
          <div>
            <NavLink to='/about'> ABOUT </NavLink>
          </div>
          <div className='header-container__items__login'>
            <div className='header-container__items__login--title'>
              <div
                onClick={toggleLogin}
                className='header-container__items__login--text'
              >
                LOGIN
              </div>
              {dropdown && (
                <div>
                  <NavLink to='/loginadmin'>
                    <div className='header-container__items__login--text'>
                      Admin
                    </div>
                  </NavLink>
                  <NavLink to='/loginuser'>
                    <div className='header-container__items__login--text'>
                      User
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          </div>




          <div className='header-container__items__register'>
            <div className='header-container__items__register--title'>
              <div
                onClick={toggleRegister}
                className='header-container__items__register--text'
              >
                REGISTER
              </div>
              {dropdown1 && (
                <div>
                  <NavLink to='/regadmin'>
                    <div className='header-container__items__register--text'>
                      Admin
                    </div>
                  </NavLink>
                  <NavLink to='/reguser'>
                    <div className='header-container__items__register--text'>
                      User
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          </div>






        </div>
        <div
          className={`header-container--toggle ${isOpen && 'open'}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}

export default Header;
