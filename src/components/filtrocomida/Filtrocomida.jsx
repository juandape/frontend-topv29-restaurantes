import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './filtrocomida.css';
const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;

function EatFilter() {
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
            <li key={food.id}>
              {food.foodtype === 'Lunch' ? alert(food.name) : null}
            </li>
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

  return (
    <div className='container__food'>
      <button
        className='container__food--button'
        onClick={handleClickBreakfast}
      >
        <label className='container__food--label' htmlFor=''>
          Desayuno
        </label>
        <img
          className='container__food--img'
          src='/images/desayuno.jpg'
          alt='desayuno'
        />
      </button>
      <button className='container__food--button' onClick={handleClickLunch}>
        <label className='container__food--label' htmlFor=''>
          Almuerzo
        </label>
        <img
          className='container__food--img'
          src='/images/almuerzo.jpg'
          alt='desayuno'
        />
      </button>
      <button className='container__food--button' onClick={handleClickDinner}>
        <label className='container__food--label' htmlFor=''>
          Cena
        </label>
        <img
          className='container__food--img'
          src='/images/cena.jpg'
          alt='desayuno'
        />
      </button>
      <button className='container__food--button' onClick={handleClickFastFood}>
        <label className='container__food--label' htmlFor=''>
          Fast Food
        </label>
        <img
          className='container__food--img'
          src='/images/fastfood.jpg'
          alt='desayuno'
        />
      </button>
    </div>
  );
}

export default EatFilter;
