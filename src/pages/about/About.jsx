import './about.css';
import React from 'react';

function AboutPage() {
  return (
    <>
      <h1 className='about--title'>About Us</h1>
      <div className='about-container'>
        <div className='about-container__info'>
          <img src='public\images\food-lion-logo-black-and-white-2.png' alt='autor' className='about-container--img' />
          <div className='about-container--description'>
            <h2 className='about-container--description--name'>
              <ul>
                <li>Alexander Herrera</li>
                <li>Miguel Chaparro</li>
                <li>Juan David Peña</li>
              </ul>
            </h2>
            <p className='about-container--description--text'>
              Fullstack Developers, Make It Real students
            </p>
          </div>
        </div>
        <div className='about-container__skills'>
          <h2 className='about-container__skills--title'>What I learn</h2>
          <ul className='about-container__skills--list'>
            <li>Create and manage remote and local repos with Git</li>
            <li>Use of the React library for the creation of web pages</li>
            <li>Best way to present and deploy the different projects</li>
          </ul>
        </div>
        <div className='about-container__social'>
          <div>github:</div>
          <div>
            <a href='https://github.com/guialexander'>@guialexander</a>
          </div>
          <div>
            <a href='https://github.com/miguelchaparrocolo'>
              @miguelchaparrocolo
            </a>
          </div>
          <div>
            <a href='https://github.com/juandape'>@juandape</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
