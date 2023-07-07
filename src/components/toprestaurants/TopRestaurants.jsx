import './toprestaurants.css';
import { Link, useLoaderData, NavLink } from 'react-router-dom';

const TopRestaurants = () => {
  const { restaurants = [] } = useLoaderData();

  const topRestaurants = restaurants
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .filter((restaurant) => restaurant.rating >= 4.5);
  return (
    <>
      <h2 className='container__home__cardrests--title'>Top Restaurants</h2>
      <div className='container__home__cardrests'>
        {topRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <Link to={`/restaurant-card/${restaurant.id}`}>
              <div className='container__home__cardrests--rest'>
                <img src={restaurant.logo} alt='rest logo' className='container__home__cardrest--img'/>
                <p>{restaurant.name}</p>
                <p>{restaurant.rating} ★</p>
                <p>{restaurant.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopRestaurants;
