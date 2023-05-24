import React, { useState, useEffect } from 'react';
import './filtrorest.css';
import axios from 'axios';
const url = 'https://api-restaurants.onrender.com/api/restaurants';


function RestFilter() {
  const [searchRest, setSearchRest] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) setSearchRest(data);
    };
    getRestaurants();
  }, []);

  console.log(searchRest);

  const handleChange = (event) => {
    // event.preventDefault();
    setSearchRest(event.target.value);
  };

  const handleClick = () => {
    const filteredRestaurants = searchRest.filter((rest) => {
      if (rest.name.toUpperCase().includes(searchRest.toUpperCase())) {
        return console.log(rest.name)
      }
      return null;
    });
    filteredRestaurants();
  };

  return (
    <div className='containter__filter'>
      {/* <label className='container__filter--label'>Busca tu restaurante  </label> */}
      <input
        className='container__filter--input'
        type='text'
        value={searchRest}
        placeholder='Busca tu restaurante'
        onChange={handleChange}
      />
      <button className='container__filter--button' onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default RestFilter;
