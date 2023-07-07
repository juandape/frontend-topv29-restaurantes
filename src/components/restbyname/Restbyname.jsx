import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './restbyname.css';

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

  const filterRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      <div className='container__filterbyname'>
        <div className='container__filterbyname--title'>
          Restaurants by Name
        </div>
        <div>
          {filterRestaurants.length === 0 ? (
            <span>'No Restaurants found'</span>
          ) : (
            filterRestaurants.map((restaurant) => (
              <Link to={`/restaurant-card/${restaurant.id}`}>
                <div
                  key={restaurant.id}
                  className='container__filterbyname__list'
                >
                  <img
                    src={restaurant.logo}
                    alt='rest logo'
                    className='container__filterbyname__list--img'
                  />
                  <div className='container__filterbyname__list--info'>
                    <div>
                      <strong>{restaurant.name}</strong>
                    </div>
                    <div>{restaurant.rating} ★</div>
                    <div>{restaurant.description}</div>
                    <div>{restaurant.foodtype}</div>
                    <div>{restaurant.address}</div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default RestByName;
