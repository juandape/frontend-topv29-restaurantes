import React, { useState } from 'react';
const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './FormAddRest.css';
import UploadImage from '../uploaderForm/uploader';

const initialState = {
  name: '',
  schedules: '',
  foodtype: '',
  address: '',
  rating: '',
  logo: '',
};

function FormAddRestaurant() {
  const [restaurant, setRestaurant] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurant({
      ...restaurant,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRestaurant = {
      ...restaurant,
    };

    console.log(newRestaurant);

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRestaurant),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      Swal.fire({
        icon: 'info',
        title: 'restaurant added successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/restaurant');
    } catch (error) {
      console.log(error);
    }
    console.log(restaurant);
    setRestaurant(initialState);
  };

  return (
    <form className='main__addrest-form' onSubmit={handleSubmit}>
      <h1 className='Form__title'>Add New restaurant</h1>
      <div className='addrest-form__column'>
        <label className='addrest-form__label'>Restaurant Name </label>
        <input
          type='text'
          name='name'
          placeholder='Restaurant´s name'
          className='addrest-form__input'
          value={restaurant.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='addrest-form__column'>
        <label className='addrest-form__label'>Schedules </label>
        <input
          type='text'
          name='schedules'
          placeholder='Enter service hours (example: 8:00-20:00)'
          className='addrest-form__input'
          value={restaurant.schedules}
          onChange={handleChange}
          required
        />
      </div>
      <div className='addrest-form__column'>
        <label className='addrest-form__label'>Rating </label>
        <input
          type='number'
          name='rating'
          min='1'
          max='5'
          placeholder='Restaurant´s initial rating'
          className='addrest-form__input'
          value={restaurant.rating}
          onChange={handleChange}
          required
        />
      </div>
      <div className='addrest-form__column'>
        <label className='addrest-form__label'>Food Type </label>
        <select
          name='foodtype'
          className='addrest-form__input options'
          onChange={handleChange}
          value={restaurant.foodtype}
          required
        >
          <option value='defaultValue' hidden>
            Select Food Type
          </option>
          <option value='Breakfast'>Breakfast</option>
          <option value='Lunch'>Lunch</option>
          <option value='Dinner'>Dinner</option>
          <option value='Fast Food'>Fast Food</option>
          <option value='Vegan'>Vegan</option>
        </select>
      </div>
      <div className='addrest-form__column'>
        <label className='addrest-form__label'>Address </label>
        <input
          type='text'
          name='address'
          placeholder='restaurant´s address'
          className='addrest-form__input'
          value={restaurant.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className='addrest-form__column'>
        <label className='addrest-form__label--logo'>Logo </label>
        <UploadImage
              setData={setRestaurant}
              dataObj={restaurant}
              name={"logo"}
              required
            />
      </div>
      <button type='submit' className='container__filteradd--button'>
        Add
      </button>
    </form>
  );
}

export default FormAddRestaurant;
