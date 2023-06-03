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

  function handleClickBreakfast() {
    return (
      <div>
        <ul>
          {foods.map((food) => (
            <li key={food.id}>
              {food.foodtype === 'Breakfast' ? alert(food.name) : null}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function handleClickLunch() {
    return (
      <div>
        <ul>
          {foods.map((food) => (
            <>
              <li key={food.id}>
                {food.foodtype === 'Lunch' ? alert(food.name) : null}
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }

  function handleClickDinner() {
    return (
      <div>
        <ul>
          {foods.map((food) => (
            <li key={food.id}>
              {food.foodtype === 'Dinner' ? alert(food.name) : null}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function handleClickFastFood() {
    return (
      <div>
        <ul>
          {foods.map((food) => (
            <li key={food.id}>
              {food.foodtype === 'Fast Food' ? alert(food.name) : null}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function handleClickVegan() {
    return (
      <div>
        <ul>
          {foods.map((food) => (
            <li key={food.id}>
              {food.foodtype === 'Vegan' ? alert(food.name) : null}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className='test'>
      <div className='container__food'>
        <button
          className='container__food--button'
          onClick={handleClickBreakfast}
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
        <button className='container__food--button' onClick={handleClickLunch}>
          <label className='container__food--label' htmlFor=''>
            Lunch
          </label>
          <img
            className='container__food--img'
            src='/images/lunch.jpg'
            alt='lunch'
          />
        </button>
        <button className='container__food--button' onClick={handleClickDinner}>
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
          onClick={handleClickFastFood}
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
        <button className='container__food--button' onClick={handleClickVegan}>
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
    </div>
  );
}

export default FoodTypeFilter;
