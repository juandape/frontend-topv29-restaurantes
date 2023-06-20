import { useLoaderData } from 'react-router-dom';
import './Cardrest.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const BASE_URL = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react-refresh/only-export-components
export const loaderRestaurant = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`${BASE_URL}/api/restaurants/${id}`);
  const data = await response.json();

  return { restaurant: data };
};

const Cardrest = () => {
  const { restaurant = [] } = useLoaderData();

  return (
    <>
      <div className='cardrest__logo'>
        <img
          src='../public/images/food.jpg'
          alt='img'
          className='cardrest__img'
        />
      </div>
      <div>
        <nav className='cardrest__nav'>
          <div className='cardrest__nav--title'>ORDER ONLINE</div>
          <div className='cardrest__nav--title'>OVERVIEW</div>
          <div className='cardrest__nav--title'>GALLERY</div>
            <div className='cardrest__nav--title'>LOCATION</div>
          <NavLink to='/booking'>
            <div className='cardrest__nav--title'>BOOK A TABLE</div>
          </NavLink>
          <div>
            <NavLink to='/feedback'>
              <div className='cardrest__nav--title'>REVIEWS</div>
            </NavLink>
          </div>
        </nav>
      </div>
      <div className='cardrest__overview'>
        <div>
          <div className='cardrest__lateralnav'>
            <div>
              <input type='text' placeholder='search dishes' />
              <button>
                <BiSearchAlt2 />
              </button>
            </div>
            <div>
              <div>Snacks</div>
              <div>Breakfast</div>
              <div>Lunch</div>
              <div>Dinner</div>
              <div>Drinks</div>
              <div>Desserts</div>
            </div>
          </div>
        </div>

        <div className='cardrest'>
          <div className='cardrest__info'>
            <div className='cardrest__info--title'>
              <div className='cardrest__info--name'>
                <h2>{restaurant.name}</h2>
              </div>
              <div className='cardrest__info--calification'>
                <h2>{restaurant.rating} ★</h2>
              </div>
            </div>
            <div className='cardrest__info--items'>
              <p>Category - {restaurant.category}</p>
              <p>Schedule - {restaurant.schedules}</p>
              <p>Address - {restaurant.address}</p>
              <p>Food Type - {restaurant.foodtype}</p>
            </div>
            <div>
              <div>
                <h2 className='cardrest__info--menu--name'>Menu</h2>
                {restaurant.foods.map((food) => (
                  <div key={food.id} className='cardrest__info--menu'>
                    <div className='cardrest__info--menu--items'>
                      <strong>{food.name}</strong>
                    </div>
                    <div>${food.price}</div>
                    <div>rate: {food.rate}</div>
                    <div>
                      <button className='cardrest__info--menu--button'>
                        order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='cardrest__payment'>
          <div>Your Order</div>

          <div>item 1 price $xxx</div>
          <div>item 2 price $xxx</div>
          <div>item 3 price $xxx</div>
          <div>total $xxx</div>
        </div>
      </div>
    </>
  );
};

// Cardrest.propTypes = {
//   name: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   schedules: PropTypes.object.isRequired,
//   adress: PropTypes.object.isRequired,
//   logo: PropTypes.string.isRequired,
// };

export default Cardrest;
