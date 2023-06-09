import react, { useState, useEffect } from 'react';
import { Link, useLoaderData, NavLink } from 'react-router-dom';
import axios from 'axios';
import './restaurantdetail.css';

const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;

const Restaurantdetail = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) setRestaurants(data);
    };
    getRestaurant();
  }, []);

  console.log(restaurants);

  return (
    <>
      <div className='container__restdetail'>
        <div>
          {restaurants.map((item, index) => (
            <div key={index} className='container__restdetail--rest'>
              <Link to={`/restaurant-card/${item.id}`}>
                <div className='container__restdetail--rest--info'>
                  <div>
                    <strong>{item.name}</strong>
                  </div>
                  <div>{item.category}</div>
                  <div>Schedules: {item.schedules}</div>
                  <div>{item.foodtype}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurantdetail;
