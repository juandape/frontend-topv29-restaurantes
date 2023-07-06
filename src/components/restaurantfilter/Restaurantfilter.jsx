import React, { useState, useEffect } from 'react';
import './restaurantfilter.css';
import axios from 'axios';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_API_URL
const url = `${BASE_URL}/api/restaurants`;

function RestaurantFilter() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const getRestaurants = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) setRestaurants(data);
    };
    getRestaurants();
  }, []);

  // console.log(restaurants);

  const handleChange = (event) => {
    setSearch(event.target.value);
    filteredRestaurants(event.target.value);
  };

  // const filteredRestaurants = (searching) => {
  //   const result = restaurants.filter((rest) => {
  //     if (
  //       rest.name.toString().toLowerCase().includes(searching.toLowerCase())
  //     ) {
  //       return rest;
  //     }
  //   });
  //   setRestaurants(result);
  // };

  const handleClick = (name) => {
    navigate (`restaurant-by-name/${name}`)
  };

  return (
    <div className='containter__filter'>
      <input
        className='container__filter--input'
        type='text'
        value={search}
        placeholder='search restaurant'
        onChange={handleChange}
      />
      <button
        type='submit'
        className='container__filter--button'
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      </div>
  );
}

export default RestaurantFilter;
