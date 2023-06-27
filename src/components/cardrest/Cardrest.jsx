import { useLoaderData } from 'react-router-dom';
import './Cardrest.css';
import NavBarCardRest from '../navbarcardrest/Navbarcardrest';
import { LuSoup } from 'react-icons/lu'

const BASE_URL = import.meta.env.VITE_API_URL;

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
          src='/images/food2.jpg'
          alt='img'
          className='cardrest__img'
        />
      </div>
      <div className='cardrest__info--title'>
        <div className='cardrest__info--icon'>
          <LuSoup />
        </div>
        <div className='cardrest__info--name'>
          <h2>{restaurant.name}</h2>
      </div>
        <div className='cardrest__info--calification'>
          <h2>{restaurant.rating} ★</h2>
        </div>
        </div>
      <NavBarCardRest />
    </>
  );
};

export default Cardrest;
