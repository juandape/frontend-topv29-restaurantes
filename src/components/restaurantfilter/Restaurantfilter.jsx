import React, { useState, useEffect } from 'react';
import './restaurantfilter.css';
import axios from 'axios';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BASE_URL = import.meta.env.VITE_API_URL
const url = `${BASE_URL}/api/restaurants`;

function RestaurantFilter() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const getRestaurants = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) setRestaurants(data);
    };
    getRestaurants();
  }, []);

  console.log(restaurants);

  const handleChange = (event) => {
    setSearch(event.target.value);
    filteredRestaurants(event.target.value);
  };

  const filteredRestaurants = (searching) => {
    const resultado = restaurants.filter((rest) => {
      if (
        rest.name.toString().toLowerCase().includes(searching.toLowerCase())
      ) {
        return rest;
      }
    });
    setRestaurants(resultado);
  };

  const handleClick = (event) => {
    event.preventDefault();
    alert(restaurants.map((rest) => rest.name));
  };

  return (
    <div className='containter__filter'>
      {/* <label className='container__filter--label'>Busca tu restaurante  </label> */}
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
