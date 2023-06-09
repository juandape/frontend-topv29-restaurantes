import React from 'react';
import FoodTypeFilter from '../../components/foodtypefilter/Foodtypefilter';
import RestaurantFilter from '../../components/restaurantfilter/Restaurantfilter';
import { Link, useLoaderData, NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Bestfood from '../../components/bestfood/Bestfood';
import Easybook from '../../components/easybook/Easybook';
import './home.css';

function HomePage() {
  const { restaurants = [] } = useLoaderData();
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
        <div>
          <NavLink to='/feedback'>
            <button>Feedback</button>
          </NavLink>
        </div>
      </div>

      <Easybook />
      <div className='container__home__cardrests'>
        {restaurants.map((item, index) => (
          <div key={item.id}>
            <Link to={`/restaurant-card/${item.id}`}>
              <div className='container__home__cardrests--rest'>
                <div className='container__home__cardrests--item'>
                  {item.name}
                </div>
                <div className='container__home__cardrests--item'>
                  {item.schedule}
                </div>
                <div className='container__home__cardrests--item'>
                  {item.category}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
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
