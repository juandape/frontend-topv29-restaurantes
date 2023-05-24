import React, { useState } from 'react';
import restaurantsdata from '../../assets/restaurantsdata.json';
import './filtrorest.css'

async function getData() {
  const response = await fetch('');
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
    <div className='containter__filter'>
      {/* <label className='container__filter--label'>Busca tu restaurante  </label> */}
      <input className='container__filter--input' type="text" value={search} placeholder='Busca tu restaurante' onChange={handleChange} />
    <button className='container__filter--button' onClick={handleClick}>Search</button>
    </div>
  );
}

export default RestFilter;
