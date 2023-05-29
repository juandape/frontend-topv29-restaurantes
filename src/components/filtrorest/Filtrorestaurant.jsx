import React, { useState, useEffect } from 'react';
import './filtrorest.css';
import axios from 'axios';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BASE_URL = import.meta.env.VITE_API_URL
const url = `${BASE_URL}/api/restaurants`;

function RestFilter() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const getRestaurants = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) setRestaurantes(data);
    };
    getRestaurants();
  }, []);

  console.log(restaurantes);

  const handleChange = (event) => {
    setSearch(event.target.value);
    filteredRestaurants(event.target.value);
  };

  const filteredRestaurants = (searching) => {
    const resultado = restaurantes.filter((rest) => {
      if (
        rest.name.toString().toLowerCase().includes(searching.toLowerCase())
      ) {
        return rest;
      }
    });
    setRestaurantes(resultado);
  };

  const handleClick = (event) => {
    event.preventDefault();
    alert(restaurantes.map((rest) => rest.name));
  };

  return (
    <div className='containter__filter'>
      {/* <label className='container__filter--label'>Busca tu restaurante  </label> */}
      <input
        className='container__filter--input'
        type='text'
        value={search}
        placeholder='Busca tu restaurante'
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

export default RestFilter;
