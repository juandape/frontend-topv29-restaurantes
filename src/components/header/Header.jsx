import { NavLink } from 'react-router-dom';
import React from 'react';
import './header.css';
// import { react } from '@babel/types';

function Header() {
  return (
    <div className="header-container">
      <nav>
        <div className="header-container__list">
          <div className>
            <NavLink to="/"> Home </NavLink>
          </div>
          <div>
            <NavLink to="/about"> About </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
