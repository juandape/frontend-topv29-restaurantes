import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './restbyname.css'

const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;

function RestByName() {
  const [restaurants, setRestaurants] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  const filterRestaurants = restaurants.filter(
    (restaurant) => restaurant.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      <div className='container__filterbyname'>
        <h1 className='container__filterbyname--title'>
          Restaurants by Name
        </h1>
        <ul>
          {filterRestaurants.length === 0 ? (
            <span>'No Restaurants found'</span>
          ) : (
              filterRestaurants.map((restaurant) => (
                <Link to={`/restaurant-card/${restaurant.id}`}>
                  <li key={restaurant.id} className='container__filterbyname__list'>
                    <img
                      src={restaurant.logo}
                      alt='rest logo'
                      className='container__filterbyname__list--img'
                    />
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.rating} ★</p>
                    <p>{restaurant.description}</p>
                    <p>{restaurant.foodtype}</p>
                    <p>{restaurant.address}</p>
                  </li>
                </Link>
              ))
          )}
        </ul>
      </div>
    </>
  )
}

export default RestByName;
