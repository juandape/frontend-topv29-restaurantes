import './bestrestaurants.css'
import { Link, useLoaderData, NavLink } from 'react-router-dom';

const BestRestaurants = () => {
  const { restaurants = [] } = useLoaderData();

  const sortRestaurants = restaurants.sort((a, b) => b.rating - a.rating).slice(0, 3);
  const topRestaurants = sortRestaurants.filter((restaurant) => restaurant.rating >= 4.5)
  return (
    <>
     <h2 className='container__home__cardrests--title'>Top Restaurants</h2>
      <div className='container__home__cardrests'>
        {topRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <Link to={`/restaurant-card/${restaurant.id}`}>
              <div className='container__home__cardrests--rest'>
                <p>{restaurant.name}</p>
                <p>{restaurant.rating} ★</p>
                <p>{restaurant.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </>
  )

}

export default BestRestaurants;
