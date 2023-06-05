import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './foodtypefilter.css';
const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;

function FoodTypeFilter() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getFood = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) setFoods(data);
    };
    getFood();
  }, []);
  console.log(foods.name);

  function handleFoodClick(foodType) {
    const food = foods.find((food) => food.foodtype === foodType);
    if (food) {
      alert(food.name);
    }
  }

  return (
    <div>
      {isLoadingFoods ? (
        <span className='loader'>Loading...</span>
      ) : (
        <div className='container__food'>
          <button
            className='container__food--button'
            onClick={() => handleFoodClick('Breakfast')}
          >
            <label className='container__food--label' htmlFor=''>
              Breakfast
            </label>
            <img
              className='container__food--img'
              src='/images/breakfast.jpg'
              alt='breakfast'
            />
          </button>
          <button
            className='container__food--button'
            onClick={() => handleFoodClick('Lunch')}
          >
            <label className='container__food--label' htmlFor=''>
              Lunch
            </label>
            <img
              className='container__food--img'
              src='/images/lunch.jpg'
              alt='lunch'
            />
          </button>
          <button
            className='container__food--button'
            onClick={() => handleFoodClick('Dinner')}
          >
            <label className='container__food--label' htmlFor=''>
              Dinner
            </label>
            <img
              className='container__food--img'
              src='/images/dinner.jpg'
              alt='dinner'
            />
          </button>
          <button
            className='container__food--button'
            onClick={() => handleFoodClick('Fast Food')}
          >
            <label className='container__food--label' htmlFor=''>
              Fast Food
            </label>
            <img
              className='container__food--img'
              src='/images/fastfood.jpg'
              alt='fast food'
            />
          </button>
          <button
            className='container__food--button'
            onClick={() => handleFoodClick('Vegan')}
          >
            <label className='container__food--label' htmlFor=''>
              Vegan
            </label>
            <img
              className='container__food--img'
              src='/images/vegan.jpg'
              alt='vegan'
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default FoodTypeFilter;
