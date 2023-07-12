import './about.css';
import React from 'react';
import { useEffect,useState } from 'react';
import FormEditRest from '../../components/formedit/FormEdit';

function AboutPage() {

  const[restaurants,Setrestaurants]=useState({})



    const fetchrestaurants=async()=>{
      const url=`https://service-restaurants.onrender.com/api/food`

      try {
        const response = await fetch(url)
        const data = await response.json()
        Setrestaurants(data)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
    fetchrestaurants()
  },[])



  console.log(restaurants)
  //console.log(restaurants[0].food[0])
  return (
    <>
      <h1 className='about--title'>About Us</h1>
      <div className='about-container'>
        <div className='about-container__info'>
          <img src='https://logowik.com/content/uploads/images/414_restaurant.jpg' alt='autor' className='about-container--img' />
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
      <FormEditRest/>
    </>
  );
}

export default AboutPage;
