import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className='container_fot'>
        <div className='fot'>
          <p className='fot_title'>RICA</p>
          <p>Proyecto en Parejas</p>
          <p>Mayo-2023</p>
        </div>
        <div className='fot'>
          <p className='fot_title'>About</p>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Login</p>
          <p>Register</p>
          <p>Terms & Co.</p>
          <p>privacy</p>
          <p>Support</p>
        </div>
        <div className='fot'>
          <p className='fot_title'>Our Location</p>
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
        <div className='fot'>
          <p className='fot_title'>Useful Links</p>
          <p>Home</p>
          <p>Our Vehical</p>
          <p>Lastest Video</p>
          <p>Services</p>
          <p>Booking Deal</p>
          <p>Emergency Call</p>
          <p>Mobile App</p>
        </div>
        <div className='fot'>
          <p className='fot_title'>New Topics</p>
          <p>Abril-2023</p>
        </div>

        <div className='fot'>
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
