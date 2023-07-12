import React, { useState } from 'react'
import './FormAddRest.css'


function FormAddRestaurant() {
  const [Restaurant, setRestaurant] = useState({});

    const handleChange = (event) => {
    const { name, value } = event.target;
    // eslint-disable-next-line no-undef
    setRestaurant(
      {
        ...Restaurant,
        [name]: value,

      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRestaurant = {
      ...Restaurant,
      id: Date.now(),
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
      const url = 'https://service-restaurants.onrender.com/api/restaurants'
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='main__addrest-form' onSubmit={handleSubmit}>
        <h1 className='Form__title'>Add New Restaurant</h1>
        <div className='addrest-form__column'>
          <label className='addrest-form__label'>Restaurant Name:  </label>
          <input
            type='text'
            name='name'
            placeholder='Restaurant´s name'
            className='addrest-form__input'
            onChange={handleChange}
            required
            />
        </div>
        <div className='addrest-form__column'>
          <label className='addrest-form__label'>Schedules:   </label>
          <input
            type='text'
            name='schedules'
            placeholder='Enter restaurant hours'
            className='addrest-form__input'
            onChange={handleChange}
            required
            />
        </div>
        <div className='addrest-form__column'>
          <label className='addrest-form__label'>Category:   </label>
          <input
            type='text'
            name='category'
            placeholder='restaurant´s category'
            className='addrest-form__input'
            onChange={handleChange}
            required
            />
        </div>
        <div className='addrest-form__column'>
          <label className='addrest-form__label'>Food Type:   </label>
          <input
            type='text'
            name='foodtype'
            placeholder='breakfast - lunch - dinner - fast food - vegan'
            className='addrest-form__input'
            onChange={handleChange}
            required
            />
        </div>
        <div className='addrest-form__column'>
          <label className='addrest-form__label'>Address:   </label>
          <input
            type='text'
            name='address'
            placeholder='restaurant´s address'
            className='addrest-form__input'
            onChange={handleChange}
            required
            />
        </div>
        <div className='addrest-form__column'>
          <label className='addrest-form__label'>Logo:   </label>
          <input
            type='text'
            name='logo'
            placeholder='https://picsum.photos/200'
            className='addrest-form__input'
            onChange={handleChange}
            required
            />
        </div>
        <button type='submit' className='container__filteradd--button'>
          Add
        </button>
      </form>
  );
};

export default FormAddRestaurant;
