import React from 'react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
// import Delete from '../delete/Delete';
import './editformrestaurant.css';
import axios from 'axios';

const initialState = {
  name: '',
  schedules: '',
  foodtype: '',
  address: '',
  rating: '',
  logo: '',
};

export const EditFormRestaurant = () => {
  const [restaurant, setRestaurant] = useState(initialState);

  const [restList, setRestList] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL;
  const url = `${BASE_URL}/api/restaurants/`;

  useEffect(() => {
    const getRestaurant = async () => {
      axios.get(url).then((response) => {
        console.log(response.data);
        setRestList(response.data);
      });
    };
    getRestaurant();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurant({
      ...restaurant,
      [name]: value,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    console.log(restaurant);

    try {

      axios
        .patch(`${BASE_URL}/api/restaurants/${restaurant.id}`, restaurant)
        .then((response) => {
          console.log(response.data);
        });
      Swal.fire({
        icon: 'info',
        title: 'restaurant updated successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
    console.log(restaurant);
    setRestaurant(initialState);
  };

  return (
    <>
      <form className='main__editrest--formUp' onSubmit={handleUpdate}>
        <h1 className='editrest--title'>Edit Restaurant</h1>

        <div>
          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Select Restaurant</label>
            <select
              name='id'
              className='addrest-form__input options'
              required
              value={restaurant.id}
              onChange={handleChange}
            >
              {console.log(restaurant.id)}
              <option value='' disabled selected hidden>
                Select Restaurant
              </option>
              {Object.values(restList).map((restaurant) => (
                <option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name}
                </option>
              ))}
            </select>
          </div>
          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Restaurant Name</label>
            <input
              type='text'
              name='name'
              placeholder='Edit name'
              className='editrest__formUp--input'
              value={restaurant.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Schedules</label>
            <input
              type='text'
              name='schedules'
              placeholder='Edit schedules'
              className='editrest__formUp--input'
              value={restaurant.schedules}
              onChange={handleChange}
              required
            />
          </div>
          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Rating</label>
            <input
              type='text'
              name='rating'
              placeholder='Edit rating'
              className='editrest__formUp--input'
              value={restaurant.rating}
              onChange={handleChange}
              min="1"
              max="5"
              required
            />
          </div>
          <div className='addrest-form__column'>
            <label className='addrest-form__label'>Food Type </label>
            <select
              name='foodtype'
              className='addrest-form__input options'
              required
              value={restaurant.foodtype}
              onChange={handleChange}
            >
              <option value='' disable selected hidden>
                Select Food Type
              </option>
              <option value='Breakfast'>Breakfast</option>
              <option value='Lunch'>Lunch</option>
              <option value='Dinner'>Dinner</option>
              <option value='Fast Food'>Fast Food</option>
              <option value='Vegan'>Vegan</option>
            </select>
          </div>
          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Address</label>
            <input
              type='text'
              name='address'
              placeholder='Edit address'
              className='editrest__formUp--input'
              value={restaurant.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className='editrest__formUp--column'>
            <label className='editrest__formUp--label'>Logo</label>
            <input
              type='url'
              name='logo'
              placeholder='Edit logo'
              className='editrest__formUp--input'
              value={restaurant.logo}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type='submit'
          data-testid='buttonEdit'
          className='editrest__form--button'
        >
          Update Changes
        </button>
        {/* <Delete /> */}
      </form>
    </>
  );
};

export default EditFormRestaurant;
