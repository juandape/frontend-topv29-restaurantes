import React from 'react';
import FoodTypeFilter from '../../components/foodtypefilter/Foodtypefilter';
import RestaurantFilter from '../../components/restaurantfilter/Restaurantfilter';
import Footer from '../../components/Footer/Footer';
import Bestfood from '../../components/bestfood/Bestfood';
import Easybook from '../../components/easybook/Easybook';
import BestRestaurants from '../../components/toprestaurants/TopRestaurants';
import './home.css';

function HomePage() {
  return (
    <>
      <img src='images/food.jpg' alt='food' />
      <RestaurantFilter />

      <div className='container__home'>
        <FoodTypeFilter />
        <div className='container__home--promoimg'>
          <img
            src='https://s3-ap-southeast-1.amazonaws.com/s3.loopme.ph/img/newos/posts/2x/24968_UR50vlNLHJGinYlC_.jpg'
            alt=''
            className='container__home--promoimg--img'
          />
          <img
            src='https://s3-ap-southeast-1.amazonaws.com/s3.loopme.ph/img/newos/posts/2x/25303_O1hS8u4EzCU9u1L6_.jpg'
            alt=''
            className='container__home--promoimg--img'
          />
        </div>
      </div>

      <Easybook />
      <BestRestaurants />
      <Bestfood />
      <Footer />
    </>
  );
}

export default HomePage;

const BASE_URL = import.meta.env.VITE_API_URL;

export const loaderRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/api/restaurants`);

  const data = await response.json();

  return { restaurants: data };
};
