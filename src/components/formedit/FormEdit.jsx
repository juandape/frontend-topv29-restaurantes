import React from 'react';
import { useState } from 'react';
// import Delete from '../delete/Delete';
import './FormEdit.css';

export const FormEditRest = ({ Restaurant }) => {
  const [RestList, SetRestList] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetRestList({
      ...RestList,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://service-restaurants.onrender.com/api/restaurants/${Restaurant.id}`;
    const config = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(RestList),
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
    SetRestList({});
  };

  return (
    <>
      <form className='main__editrest--formUp' onSubmit={handleSubmit}>
        <h1 className='editrest--title'>Edit Restaurant</h1>

        <div>
          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Restaurant Name</label>
            <input
              type='text'
              name='name'
              placeholder='Edit name'
              className='editrest__formUp--input'
              onChange={handleChange}
              required
            />
          </div>
          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Schedules</label>
            <input
              type='text'
              name='city'
              placeholder='Edit schedules'
              className='editrest__formUp--input'
              onChange={handleChange}
              required
            />
          </div>
          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Category</label>
            <input
              type='text'
              name='phone'
              placeholder='Edit category'
              className='editrest__formUp--input'
              onChange={handleChange}
              required
            />
          </div>
          <div className='addrest-form__column'>
        <label className='addrest-form__label'>Food Type </label>
        <select name='foodtype' className='addrest-form__input options' required>
          <option value='' disable selected hidden >
            Select Food Type
          </option>
          <option value='breakfast'>Breakfast</option>
          <option value='lunch'>Lunch</option>
          <option value='dinner'>Dinner</option>
          <option value='fast food'>Fast Food</option>
          <option value='vegan'>Vegan</option>
        </select>
      </div>
          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Address</label>
            <input
              type='text'
              name='phone'
              placeholder='Edit address'
              className='editrest__formUp--input'
              onChange={handleChange}
              required
            />
          </div>
          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Logo</label>
            <input
              type='url'
              name='photo'
              placeholder='Edit logo'
              className='editrest__formUp--input'
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type='submit'
          data-testid='buttonEdit'
          className='editrest__form--button'
        >
          Submit Changes
              </button>
              {/* <Delete /> */}
      </form>
    </>
  );
};

export default FormEditRest;
