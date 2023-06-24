import { useLoaderData } from 'react-router-dom';
import './Cardrest.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBarCardRest from '../navbarcardrest/Navbarcardrest';
import MenuRest from '../menurest/Menurest';

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
      <NavBarCardRest />
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
              {/* <MenuRest /> */}
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
