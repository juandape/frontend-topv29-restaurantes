import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaBiohazard } from 'react-icons/fa';
import './header.css';
import International from '../international/International';
import Badge from '../badge/Badge';
import { useSelector ,useDispatch } from '../../store';
import { session } from '../../store/actions';

function Header() {
  const state = useSelector();
  const dispatch = useDispatch()

  const nick= state.login.profile.fullName;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () =>{

    //alert("ingrese") prueba botón

    dispatch( session(null));

  };



  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='header-container'>
        <div className='header-container__logo'>
        <FaBiohazard />
        </div>
        <div className={`header-container__items ${isOpen && 'open'}`}>
          <div className='header-container__items--title' onClick={handleClick}>
            <NavLink to='/'> HOME </NavLink>
          </div>
          <div className='header-container__items--title'  onClick={handleClick}>
            <NavLink to='/restaurant'> RESTAURANTS </NavLink>
          </div>

          <div className='header-container__items--title'  onClick={handleClick}>
            <NavLink to='/about'> ABOUT </NavLink>
          </div>


          {  nick !== null ?
          (<>
            <div className='header-container__items--title'  onClick={handleClick}>
            <NavLink to='/'> {nick} </NavLink>
            </div>

            <div className='header-container__items--title'  onClick={handleClose}>
            <NavLink to='#'> Sign off </NavLink>
          </div>
          </>
          ):(

          <div className='header-container__items--access'  onClick={handleClick}>
          <NavLink to='/access'>
            <BsFillPersonFill  size={23}/>
           </NavLink>
          </div>)

          }



          <div className='header-container__items--international' >
            <International />
          </div>
          <NavLink to='/cart'><div>
            <Badge />
          </div>
          </NavLink>

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
