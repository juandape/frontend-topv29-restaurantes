import { useLoaderData, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from '../../store';
import { addFoodToCart, removeFoodFromCart } from '../../store/actions';
import { BsTrash } from 'react-icons/bs';
import { GrFormAdd } from 'react-icons/gr';
import './menurest.css';
import Totalbuy from '../totalbuy/Totalbuy';
import Badge from '../badge/Badge';

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
  const state = useSelector();
  const cartLength = Object.values(state.cart);

  function handleAdd(food) {
    console.log(food);
    dispatch(addFoodToCart(food));
  }

  // function handleRemove() {
  //   if (item.quantity === 0) return alert('cart empty');
  //   return dispatch(removeFoodFromCart());
  // }

  return (
    <>
      <h2 className='menurest__info--menu--name'>MENU</h2>
      <div>
        {restaurant.foods.map((food) => (
          <div key={food.id} className='menurest__info--menu'>
            <div className='menurest__info--menu--items'>
              <strong>{food.name}</strong>
            </div>
            <div>$ {Intl.NumberFormat('en-US').format(food.price)}</div>
            <div>rate: {food.rate}</div>
            <div className='menurest__items--show'>
              {/* <button
                onClick={() => handleRemove(food)}
                className='cardlist__items--button'
              >
                <BsTrash />
              </button> */}
              {/* <div className='cardlist__items--quantity'>
                {cartLength.map((item) => (
                  <div key={item.id}>
                    {item.quantity}
                  </div>
                ))}
              </div> */}
              <button
                className='menurest__items--button'
                onClick={() => handleAdd(food)}
              >
                <GrFormAdd />
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
