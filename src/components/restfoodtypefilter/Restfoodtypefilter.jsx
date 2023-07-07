import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './restfoodtypefilter.css';
const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;

function RestFoodTypeFilter() {
  const [restaurants, setRestaurants] = useState([]);
  const { foodtype } = useParams();

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  const filterRestaurants = restaurants.filter(
    (restaurant) => restaurant.foodtype === foodtype
  );

  return (
    <div className='container__filterbytype'>
      <h1 className='container__filterbytype--title'>
        Restaurants by Type of Food
      </h1>
      <ul>
        {filterRestaurants.length === 0 ? (
          <span>'No restaurants found'</span>
        ) : (
          filterRestaurants.map((restaurant) => (
            <Link to={`/restaurant-card/${restaurant.id}`}>
              <li key={restaurant.id} className='container__filterbytype__list'>
                <img
                  src={restaurant.logo}
                  alt='rest logo'
                  className='container__filterbytype__list--img'
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
  );
}

export default RestFoodTypeFilter;
