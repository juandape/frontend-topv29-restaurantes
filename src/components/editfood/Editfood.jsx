import React, { useState } from 'react';
import './editfood.css';

const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/foods`;


function EditFood() {
  const [Restaurant, setRestaurant] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurant({
      ...Restaurant,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(Restaurant),
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='main__addfood-form' onSubmit={handleSubmit}>
      <h1 className='Form__title'>Edit Food</h1>
      <div className='addfood-form__column'>
        <label className='addfood-form__label'>Food Name: </label>
        <input
          type='text'
          name='name'
          placeholder='Food name'
          className='addfood-form__input'
          onChange={handleChange}
          required
        />
      </div>
      <div className='addfood-form__column'>
        <label className='addfood-form__label'>Price: </label>
        <input
          type='text'
          name='schedules'
          placeholder='Food price'
          className='addfood-form__input'
          onChange={handleChange}
          required
        />
      </div>
      <div className='addfood-form__column'>
        <label className='addfood-form__label'>Reference photo: </label>
        <input
          type='text'
          name='logo'
          placeholder='LINK photo'
          className='addfood-form__input'
          onChange={handleChange}
          required
        />
      </div>
      <div className='addfood-form__column'>
        <label className='addfood-form__label'>Rate </label>
        <input
          type='text'
          name='foods'
          placeholder='1.0 - 5.0'
          className='addfood-form__input'
          onChange={handleChange}
          required
        />
      </div>

      <button type='submit' className='container__filter--button'>
        Submit Changes
      </button>
    </form>
  );
}

export default EditFood;
