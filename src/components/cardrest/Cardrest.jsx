import { useLoaderData } from 'react-router-dom';
import './Cardrest.css';
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
      <div className='container'>
        <div className='cardrest'>
          <div className='cardrest__logo'>
            <img src={restaurant.logo} alt='img' className='cardrest__img' />
          </div>
          <div className='cardrest__info'>
            <div className='cardrest__info--name'>
              <h2>{restaurant.name}</h2>
            </div>
            <div className='cardrest__info--category'>
              <h4> {restaurant.category}</h4>
            </div>
            <div className='cardrest__info--schedules'>
              <p>{restaurant.schedules} (Mon-Sun)</p>
            </div>
            <div className='cardest__info--adress'>
              <p> Find us in {restaurant.address}</p>
            </div>
            <div className='cardest__info--link'>
              <button className='cardrest__button'>
                <p>See us!</p>
              </button>
            </div>
          </div>
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

