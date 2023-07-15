import React, { useState, useEffect } from 'react';
import './editfood.css';
import Swal from 'sweetalert2';
import { getRestaurants, getFoods } from '../../services';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UploadImage from '../uploaderForm/uploader';

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
  const [datarestaurant, setdatarestaurant] = useState([]);
  const url = `${BASE_URL}/api/food/${food.id}`;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFood({
      ...food,
      [name]: value,
    });
  };

  const handleChangeFood = (e) => {
    const { name, value } = e.target;

    setFood({
      ...food,
      [name]: value,
    });

    const rrestaurant = restaurants.find(
      (restaurant) => restaurant.id === value
    );
    setdatarestaurant(rrestaurant.food);
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
          text: 'Successfully food created !',
        });
        setFood(initialState);
        window.location.reload(true);
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

  const handleDelete = () => {
    if (food.id === undefined) {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Please select a Food',
      });
    }
    axios.delete(`${BASE_URL}/api/food/${food.id}`).then((response) => {});
    Swal.fire({
      icon: 'info',
      title: 'Food deleted successfully',
      showConfirmButton: false,
      timer: 1500,
    });
    setFood(initialState);
    window.location.reload(true);
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
  }, [food]);

  return (
    <>
      <form className='main__editfood-form' onSubmit={handleSubmit}>
        <h1 className='Form__title'>Edit Food</h1>

        <div className='editfood-form__column'>
          <label className='editfood-form__label'>Restaurant</label>
          <select
            name='restaurantsId'
            className='editfood-form__input--select'
            value={food.restaurantsId}
            onChange={handleChangeFood}
            required
          >
            <option value='defaultValue' hidden>
              Select restaurant
            </option>
            {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))}
          </select>
        </div>

        <div className='editfood-form__column'>
          <label className='editfood-form__label'>Select Food </label>
          <select
            name='id'
            className='editfood-form__input--select'
            value={food.id}
            onChange={handleChange}
            required
          >
            <option value='defaultValue' hidden>
              Select Food
            </option>
            {datarestaurant.map((food) => (
              <option key={food.id} value={food.id}>
                {food.name}
              </option>
            ))}
          </select>
        </div>
        <div className='editfood-form__column'>
          <label className='editfood-form__label'>Food Name </label>
          <input
            type='text'
            name='name'
            className='editfood-form__input'
            placeholder='Edit Food name'
            onChange={handleChange}
            value={food.name}
            required
          />
        </div>
        <div className='editfood-form__column'>
          <label className='editfood-form__label'>Price </label>
          <input
            type='number'
            name='price'
            className='editfood-form__input'
            placeholder='Edit price'
            onChange={handleChange}
            value={food.price}
            required
          />
        </div>

        <div className='editfood-form__column'>
          <label className='editfood-form__label'>Rate </label>
          <input
            type='number'
            name='rate'
            className='editfood-form__input'
            placeholder='Edit Rating'
            min='1'
            max='5'
            onChange={handleChange}
            value={food.rate}
            required
          />
        </div>

        <div className='editfood-form__column'>
          <label className='editfood-form__label--photo'>Reference photo </label>
          <UploadImage
            setData={setFood}
            dataObj={food}
            name={'image'}
            required
          />
        </div>

        <button type='submit' className='editfood__form--button'>
          Submit Changes
        </button>
      </form>

      <button
        type='button'
        data-testid='buttonEdit'
        className='editfood__form--button--delete'
        onClick={handleDelete}
      >
        Delete Food
      </button>
    </>
  );
}

export default EditFood;
