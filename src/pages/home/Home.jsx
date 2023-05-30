
import React from 'react';
import FoodTypeFilter from '../../components/foodtypefilter/Foodtypefilter';
import RestaurantFilter from '../../components/restaurantfilter/restaurantfilter';
import './home.css';
import LoginFormAdmin from '../../components/loginform/Loginformadmin';
import RegFormAdmin from '../../components/registerform/Regformadmin';
import LoginFormUser from '../../components/loginform/Loginformuser';
import RegFormUser from '../../components/registerform/Regformuser';
import Feedback from '../../components/feedback/Feedback';


function HomePage() {
  return (
    <>
      <RestaurantFilter />
      <div className='container__home'>
        <FoodTypeFilter />
        <RegFormAdmin />
        <RegFormUser />
        <LoginFormAdmin />
        <LoginFormUser />
        {/*<Addfood/>*/}
        <Feedback />
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
