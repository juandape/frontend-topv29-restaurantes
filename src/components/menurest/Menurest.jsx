import { useLoaderData, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from '../../store';
import { addFoodToCart } from '../../store/actions';
import './menurest.css';
import Totalbuy from '../totalbuy/Totalbuy';
import Badge from '../badge/Badge';

const BASE_URL = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react-refresh/only-export-components
export const loaderRestaurant = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`${BASE_URL}/api/food/${id}`);
  const data = await response.json();

  return { restaurant: data };
};

function MenuRest() {
  const { restaurant = [] } = useLoaderData();
  const dispatch = useDispatch();
  const state = useSelector();

  function handleAdd(item) {
    console.log(item);
    dispatch(addFoodToCart(item));
  }

  return (
    <>
      <h2 className='menurest__info--menu--name'>MENU</h2>
      <div>
        {restaurant.foods.map((item) => (
          <div key={item.id} className='menurest__info--menu'>
            <div className='menurest__info--menu--items'>
              <strong>{item.name}</strong>
            </div>
            <div>$ {Intl.NumberFormat('en-US').format(item.price)}</div>
            <div>rate: {item.rate}</div>
            <div className='menurest__items--show'>
              <button
                className='menurest__items--button'
                onClick={() => handleAdd(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
        <div className='menurest__bottom'>
          <div className='menurest__bottom--total'>
            <Totalbuy />
          </div>

          <div className='menurest__bottom--badge'>
            <Badge />
          </div>
        </div>
      </div>
      <div className='menurest__gotocart'>
        <NavLink to='/cart'>
          <button className='menurest__gotocart--button'>Go to Cart</button>
        </NavLink>
      </div>
    </>
  );
}

export default MenuRest;
