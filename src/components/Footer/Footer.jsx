import React from 'react';
import { useState } from 'react';
import Modal from '../modal/Modal';
import './Footer.css';

function Footer() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer>

      <div className='container_fot'>
        <div className='fot' onClick={handleClick}>
          <p className='fot_title'>RICA</p>
         <div className={`fot_title_open ${isOpen && 'open'}`} >
          <p>Proyecto en Parejas</p>
          <p>Mayo-2023</p>
          </div>



        </div>
        <div className='fot'>
          <p className='fot_title' onClick={handleClick}>About</p>
          <div className={`fot_title_open1 ${isOpen && 'open'}`}>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Login</p>
          <p>Register</p>
          <p>Terms & Co.</p>
          <p>privacy</p>
          <p>Support</p>
        </div>
        </div>


        <div className='fot'>
          <p className='fot_title' onClick={handleClick}>Our Location</p>
          <div className={`fot_title_open2 ${isOpen && 'open'}`}>
          <div className='fot_mapa'>
            <a
              href='https://goo.gl/maps/kwahxaWk8zWvwk7p7'
              target='_blank'
              rel='noreferrer'
            >
             <img src='images/mapa.jpg' alt='mapa' />
            </a>
          </div>
          </div>
        </div>


        <div className='fot'>
          <p className='fot_title' onClick={handleClick} >Useful Links</p>
          <div className={`fot_title_open3 ${isOpen && 'open'}`}>
          <p>Home</p>
          <p>Our Vehical</p>
          <p>Lastest Video</p>
          <p>Services</p>
          <p>Booking Deal</p>
          <p>Emergency Call</p>
          <p>Mobile App</p>
        </div>
        </div>


        <div className='fot'>
          <p className='fot_title' onClick={handleClick} >New Topics</p>
          <div className={`fot_title_open4 ${isOpen && 'open'}`}></div>
          <p>Abril-2023</p>
        </div>

        <div className='fot'>
          <p className='fot_title' onClick={handleClick} >Diseñado por:</p>
          <div className={`fot_title_open5 ${isOpen && 'open'}`}></div>
          <p>Diseñado Por:</p>
          <p>Guillermo Herrera</p>
          <p>Miguel Chaparro</p>
          <p>Juan David Peña</p>
        </div>
      </div>
      <div className='contene'>
        <div className='contenedorRedes'>
          <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
            <img src='images/gorjeo.png' alt='twiter' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <img src='images/instagram.png' alt='instagram' />
          </a>
          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
            <img src='images/youtube.png' alt='youtuber' />
          </a>
        </div>

        <div className='contenedorRedes_fot'>
          <p>Copyright 2023 Restaurant BY Grupo 1</p>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
