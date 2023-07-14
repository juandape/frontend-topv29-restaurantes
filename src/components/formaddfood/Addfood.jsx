import React, { useState, useEffect } from 'react';
import './Addfood.css';
import Swal from 'sweetalert2';
import { getRestaurants } from '../../services'; // comentairoodxj
import UploadImage from '../uploaderForm/uploader';

function Addfood() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const url = `${BASE_URL}/api/food`;

  const initialState = {
    name: '',
    price: '',
    image: '',
    rate: '',
    restaurantsId: '',
  };
  const [food, setFood] = useState(initialState);
  const [restaurants, setRestaurants] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // eslint-disable-next-line no-undef
    setFood({
      ...food,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(food),
      };

      const response = await fetch(url, options);
      const data = await response.json();

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

    fetchData();
  }, []);

  return (
    <form className='main__addfood-form' onSubmit={handleSubmit}>
      <h1 className='Form__title'>Add New Food</h1>

      <div className='addfood-form__column'>
        <label className='addfood-form__label'>Select Restaurant </label>
        <select
          name='restaurantsId'
          className='addfood-form__input--select'
          value={food.restaurantsId}
          onChange={handleChange}
          required
        >
          <option value='defaultValue' hidden>Select Restaurant</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>
        {console.log(food)}
      </div>
      <div className='addfood-form__column'>
        <label className='addfood-form__label'>Food Name </label>
        <input
          type='text'
          name='name'
          className='container__login--input'
          placeholder='Enter Food Name'
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
          className='container__login--input'
          placeholder='Enter Price'
          onChange={handleChange}
          value={food.price}
          required
        />
      </div>

      <div className='addfood-form__column'>
        <label className='addfood-form__label'>Rating </label>
        <input
          type='number'
          name='rate'
          max='5'
          min='1'
          className='container__login--input'
          placeholder='Initial Rating'
          onChange={handleChange}
          value={food.rate}
          required
        />
      </div>

      <div className='addfood-form__column'>
        <label className='addfood-form__label--photos'>Reference photo </label>
            <UploadImage
              setData={setFood}
              dataObj={food}
              name={"image"}
              required
            />
      </div>

      <button type='submit' className='container__filteradd--button'>
        Add Food
      </button>
    </form>
  );
}

export default Addfood;
