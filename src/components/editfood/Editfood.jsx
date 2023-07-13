import React, { useState, useEffect } from 'react';
import './editfood.css';
import Swal from 'sweetalert2';
import { getRestaurants, getFoods } from '../../services';

function EditFood() {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const initialState = {
    name: '',
    price: '',
    image: '',
    rate: '',
    restaurantsId: '',
  };
  const [food, setFood] = useState(initialState);
  const [restaurants, setRestaurants] = useState([]);
  const [dataFood, setDataFood] = useState([]);
  const url = `${BASE_URL}/api/food/${food.id}`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFood({
      ...food,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(food),
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        Swal.fire({
          icon: 'info',
          title: 'Registration successful',
          text: 'Successfully created food !',
        });
        setFood(initialState);
      } else {
        Swal.fire({
          icon: 'info',
          title: 'Failed',
          text: 'Please try again.',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRestaurants();
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.log('Error al obtener los restaurantes:', error);
      }
    };
    const fetchFoods = async () => {
      try {
        const response = await getFoods();
        const data = await response.json();
        setDataFood(data);
      } catch (error) {
        console.log('Error al obtener los restaurantes:', error);
      }
    };
    fetchFoods();
    fetchData();
  }, []);

  return (
    <>
      <form className='main__addfood-form' onSubmit={handleSubmit}>
        <h1 className='Form__title'>Edit Food</h1>

        <div className='addfood-form__column'>
          <label className='addfood-form__label'>Restaurant</label>
          <select
            name='restaurantsId'
            className='addfood-form__input'
            value={food.restaurantsId}
            onChange={handleChange}
            required
          >
            <option value='' disabled selected hidden>Select restaurant</option>
            {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))}
          </select>
        </div>

        <div className='addfood-form__column'>
          <label className='addfood-form__label'>Select Food </label>
          <select
            name='id'
            className='addfood-form__input'
            value={food.id}
            onChange={handleChange}
            required
          >
            <option value='' disabled selected hidden>
              Select Food
            </option>
            {dataFood.map((food) => (
              <option key={food.id} value={food.id}>
                {food.name}
              </option>
            ))}
          </select>
        </div>
        <div className='addfood-form__column'>
          <label className='addfood-form__label'>Food Name </label>
          <input
            type='text'
            name='name'
            className='addfood-form__input'
            placeholder='Edit Food name'
            onChange={handleChange}
            value={food.name}
            required
          />
        </div>
        <div className='addfood-form__column'>
          <label className='addfood-form__label'>Price </label>
          <input
            type='number'
            name='price'
            className='addfood-form__input'
            placeholder='Edit price'
            onChange={handleChange}
            value={food.price}
            required
          />
        </div>

        <div className='addfood-form__column'>
          <label className='addfood-form__label'>Rate </label>
          <input
            type='number'
            name='rate'
            className='addfood-form__input'
            placeholder='Edit Rating'
            min='1'
            max='5'
            onChange={handleChange}
            value={food.rate}
            required
          />
        </div>

        <div className='addfood-form__column'>
          <label className='addfood-form__label--photo'>Reference photo </label>
          <input
            type='file'
            name='image'
            className='addfood-form__input'
            placeholder='photo'
            onChange={handleChange}
            value={food.image}
          />
        </div>

        <button type='submit' className='container__filteredit--button'>
          Submit Changes
        </button>
      </form>
    </>
  );
}

export default EditFood;
