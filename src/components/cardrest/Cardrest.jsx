import { useLoaderData } from 'react-router-dom';
import './Cardrest.css';
import PropTypes from 'prop-types';

const BASE_URL = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react-refresh/only-export-components
export const loaderRestaurant = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`${BASE_URL}/api/restaurants`);
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
          <div class="cardrest__info">
                <div class="cardrest__info--title">
                    <div  class="cardrest__info--name">
                        <h2>{restaurant.name}</h2>
                    </div>
                    <div class="cardrest__info--calification">
                        <h2>4,5 ★</h2>
                    </div>
                </div>
                <div class="cardrest__info--category">
                    <p>- {restaurant.category}</p>
                </div>
                <div class="cardrest__info--schedules">
                    <p>- Since {restaurant.schedules}</p>
                </div>
                <div class="cardrest__info--adress">
                    <p>- Find us in {restaurant.address}</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

Cardrest.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  schedules: PropTypes.object.isRequired,
  adress: PropTypes.object.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Cardrest;

