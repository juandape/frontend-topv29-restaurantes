import React, { useState } from 'react';
import restaurantsdata from '../../assets/restaurantsdata.json';

async function getEpisodes() {
  const response = await fetch('https://rickandmortyapi.com/api/episode/');
  const data = await response.json();
  return data.results;
}

const restaurants = restaurantsdata.map((item) => {
  return item.name
})

console.log(restaurants)

function RestFilter() {
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleClick = () => {

  }

  return (
    <div>
      <label>Busca tu restaurante  </label>
      <input type="text" value={search} onChange={handleChange} />
    <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default RestFilter;
