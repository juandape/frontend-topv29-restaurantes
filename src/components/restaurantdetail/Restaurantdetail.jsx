import react, { useState, useEffect } from 'react';
import axios from 'axios';
import './restaurantdetail.css';

const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;

const Restaurantdetail = () => {
const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) setRestaurants(data);
    };
    getRestaurant();

  }, []);

  console.log(restaurants);


  return (
    <>
      <div className='container__restdetail'>
        <nav className='container__restdetail__nav'>
          <div className='container__restdetail__nav--item'>ORDER ONLINE</div>
          <div className='container__restdetail__nav--item'>OVERVIEW</div>
          <div className='container__restdetail__nav--item'>GALLERY</div>
          <div className='container__restdetail__nav--item'>LOCATION</div>
          <div className='container__restdetail__nav--item'>BOOK A TABLE</div>
          <div className='container__restdetail__nav--item'>REVIEWS</div>
        </nav>
      </div>
    </>
  );
};

export default Restaurantdetail;
