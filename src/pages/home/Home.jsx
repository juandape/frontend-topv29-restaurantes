
import React from 'react';
import FoodTypeFilter from '../../components/foodtypefilter/Foodtypefilter';
import RestaurantFilter from '../../components/restaurantfilter/restaurantfilter';
import './home.css';
import { NavLink } from 'react-router-dom';


function HomePage() {
  return (
    <>
      <img src='images/food.jpg' alt='' />
      <RestaurantFilter />
      <div><NavLink to='/feedback'><button>Feedback</button></NavLink></div>

      <div className='container__home'>
        <FoodTypeFilter />
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
