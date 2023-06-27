import { useLoaderData } from 'react-router-dom';
import { useDispatch } from '../../store';
import { addFoodToCart } from '../../store/actions';
import './menurest.css';

const BASE_URL = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react-refresh/only-export-components
export const loaderRestaurant = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`${BASE_URL}/api/restaurants/${id}`);
  const data = await response.json();

  return { restaurant: data };
};

function MenuRest() {
  const { restaurant = [] } = useLoaderData();
  const dispatch = useDispatch();

  function addToCart(food) {
    console.log(food);
    dispatch(addFoodToCart(food));
  }

  return (
    <>
      <h2 className='cardrest__info--menu--name'>MENU</h2>
      <div>
        {restaurant.foods.map((food) => (
          <div key={food.id} className='cardrest__info--menu'>
            <div className='cardrest__info--menu--items'>
              <strong>{food.name}</strong>
            </div>
            <div>${food.price}</div>
            <div>rate: {food.rate}</div>
            <div>
              <button
                className='cardrest__info--menu--button'
                onClick={() => addToCart(food)}
              >
                order
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MenuRest;
