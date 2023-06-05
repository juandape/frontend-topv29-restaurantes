import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './foodtypefilter.css';
const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;

function FilterFood() {
  const [food, setcateg] = useState([]);
  // const [isLoadingcateg, setLoadingcateg] = useState(true);
  useEffect(() => {
    const getFood = async () => {
      const { data, status } = await axios.get(url);
      // setLoadingcateg(false);
      if (status === 200) setcateg(data);
    };
    getFood();
  }, []);


  function handleFoodClick(foodType) {
    const foods = categ.find((foodN) => foodN.foodType === foodType);
    if (foods) {
      window.alert(foods.foods.name);
    }
  }

  return (
    <div>
     {/* <label className='container__filter--label'>Busca tu restaurante  </label> */}
     <input
        className='container__filter--input'
        type='text'
        value={food}
        placeholder='search food'
        onChange={handleChange}
      />
      <button
        type='submit'
        className='container__filter--button'
        onClick={handleClick}
      >
      </button>
    </div>
  );
}

export default FilterFood;
