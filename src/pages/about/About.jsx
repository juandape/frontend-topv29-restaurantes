import './about.css';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function AboutPage() {
  return (
    <>
      <h1 className='about--title'>About Us</h1>
      <div className='about-container'>
        <div className='about-container__info'>
          <img
            src='https://logowik.com/content/uploads/images/414_restaurant.jpg'
            alt='autor'
            className='about-container--img'
          />
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
          <h2 className='about-container__skills--title'>What We learn</h2>
          <ul className='about-container__skills--list'>
            <li>Create and manage remote and local repos with Git</li>
            <li>Use of the React library for the creation of web pages</li>
            <li>Best way to present and deploy the different projects</li>
          </ul>
        </div>
        <div className='about-container__social'>
          <div>
            <div>
              <FaGithub />
            </div>
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
          <div>
            <div>
              <FaLinkedinIn style={{color: 'blue'}}/>
            </div>
            <div>
              <a href='https://linkedin.com/in/guillermoalexanderherrerarodriguez29a816124'>Alexander Herrera</a>
            </div>
            <div>
              <a href='https://linkedin.com/in/miguel-chaparro-74b81b1b7/'>
                Miguel Chaparro
              </a>
            </div>
            <div>
              <a
                href='https://linkedin.com/in/juan-david-peña-23936627b'
              >
                Juan David Peña
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
