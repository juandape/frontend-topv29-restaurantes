import React from 'react';
import { useState } from 'react';
import Modal from '../modal/Modal';
import './Footer.css';

function Footer() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleClick3 = () => {
    setIsOpen3(!isOpen3);
  };
  const handleClick4 = () => {
    setIsOpen4(!isOpen4);
  };
  const handleClick5 = () => {
    setIsOpen5(!isOpen5);
  };
  const handleClick6 = () => {
    setIsOpen6(!isOpen6);
  };

  return (
    <footer>

      <div className='container_fot'>
        <div className='fot' onClick={handleClick1}>
          <p className='fot_title'>RICA</p>
         <div className={`fot_title_open ${isOpen1 && 'open'}`} >
          <p>Proyecto en Parejas</p>
          <p>Mayo-2023</p>
          </div>



        </div>
        <div className='fot'>
          <p className='fot_title' onClick={handleClick2}>About</p>
          <div className={`fot_title_open1 ${isOpen2 && 'open'}`}>
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
          <p className='fot_title' onClick={handleClick3}>Our Location</p>
          <div className={`fot_title_open2 ${isOpen3 && 'open'}`}>
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
          <p className='fot_title' onClick={handleClick4} >Useful Links</p>
          <div className={`fot_title_open3 ${isOpen4 && 'open'}`}>
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
          <p className='fot_title' onClick={handleClick5} >New Topics</p>
          <div className={`fot_title_open4 ${isOpen5 && 'open'}`}>
          <p>Abril-2023</p>
        </div>
        </div>

        <div className='fot'>
          <p className='fot_title' onClick={handleClick6} >Diseñado por:</p>
          <div className={`fot_title_open5 ${isOpen6 && 'open'}`}>
          <p>Guillermo Herrera</p>
          <p>Miguel Chaparro</p>
          <p>Juan David Peña</p>
        </div>
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
