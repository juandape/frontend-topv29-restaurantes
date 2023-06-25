import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './foodtypefilter.css';
const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;

function FoodTypeFilter() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getFood = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) setFoods(data);
    };
    getFood();
  }, []);

  function handleFoodClick(foodtype) {
    navigate(`/restaurant-by-type/${foodtype}`);
  }

  function handleFoodLength(foodtype) {
    const foodLength = foods.filter((food) => food.foodtype === foodtype);
    return foodLength.length;
  }

  return (
    <div>
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
          <span>{handleFoodLength('Breakfast')} Restaurants</span>
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
          <span>{handleFoodLength('Lunch')} Restaurants</span>
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
          <span>{handleFoodLength('Dinner')} Restaurants</span>
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
          <span>{handleFoodLength('Fast Food')} Restaurants</span>
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
          <span>{handleFoodLength('Vegan')} Restaurants</span>
        </button>
      </div>
    </div>
  );
}

export default FoodTypeFilter;
