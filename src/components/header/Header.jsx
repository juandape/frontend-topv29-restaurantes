import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const toggle = () => setDropdown(!dropdown);

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
                onClick={toggle}
                className='header-container__items__login--item'
              >
                LOGIN
              </div>
              {dropdown && (
                <div>
                  <NavLink to='/loginadmin'>
                    <div className='header-container__items__login--item'>
                      Admin
                    </div>
                  </NavLink>
                  <NavLink to='/loginuser'>
                    <div className='header-container__items__login--item'>
                      User
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          </div>


          <div className='header-container__items__login'>
            <div className='header-container__items__login--title'>
              <div
                onClick={toggle}
                className='header-container__items__login--item'
              >
                or REGISTER
              </div>
              {dropdown && (
                <div>
                  <NavLink to='/regadmin'>
                    <div className='header-container__items__login--item'>
                      Admin
                    </div>
                  </NavLink>
                  <NavLink to='/reguser'>
                    <div className='header-container__items__login--item'>
                      User
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          </div>-



















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
