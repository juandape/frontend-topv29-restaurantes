import React from 'react';
import './commingsoon.css';
import Restaurantdetail from '../../components/restaurantdetail/Restaurantdetail';

function Commingsoon() {
  return (
    <div className='commingsoon'>
      <h1>Comming soon...</h1>
      {/* <img
        src='https://logowik.com/content/uploads/images/414_restaurant.jpg'
        alt=''
        className='commingsoon--img'
      /> */}
      <Restaurantdetail />
    </div>
  );
}

export default Commingsoon;
