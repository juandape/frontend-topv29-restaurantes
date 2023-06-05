import React from 'react';
import FoodTypeFilter from '../../components/foodtypefilter/Foodtypefilter';
import RestaurantFilter from '../../components/restaurantfilter/Restaurantfilter';
import './home.css';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

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
        <div>
          <NavLink to='/feedback'>
            <button>Feedback</button>
          </NavLink>
        </div>
        {/*<Addfood/>*/}

      </div>
    </>
  );
}

export default HomePage;

// // eslint-disable-next-line react-refresh/only-export-components
// export const loaderProducts = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");

//   const data = await response.json();

//   return { products: data };
// };
