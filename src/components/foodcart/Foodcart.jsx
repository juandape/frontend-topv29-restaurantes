import { useDispatch } from '../../store';
import { removeFoodFromCart } from '../../store/actions';

const BASE_URL = import.meta.env.VITE_API_URL;

export const loaderRestaurant = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`${BASE_URL}/api/restaurants/${id}`);
  const data = await response.json();

  return { restaurant: data };
};

function FoodCart() {
  const { restaurant = [] } = useLoaderData();
  const dispatch = useDispatch();

  function removeFood() {
    dispatch(removeFoodFromCart(id));
  }

  return (
    <div>
      <h2 className='cardrest__info--menu--name'>ORDER</h2>
      {restaurant.foods.map((food) => (
        <div key={food.id} className='cardrest__info--menu'>
          <div className='cardrest__info--menu--items'>
            <strong>{food.name}</strong>
            <span>$ {price}</span>
            <button onClick={removeFood}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodCart;
