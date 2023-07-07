import React, { useState, useEffect } from 'react';
import './restaurantfilter.css';
import axios from 'axios';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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


  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    navigate (`restaurant-by-name/${search}`)
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
