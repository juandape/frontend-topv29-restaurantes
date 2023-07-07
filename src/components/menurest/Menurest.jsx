import { useLoaderData, NavLink } from 'react-router-dom';
import { useDispatch } from '../../store';
import { addFoodToCart } from '../../store/actions';
import './menurest.css';
import Totalbuy from '../totalbuy/Totalbuy';
import Badge from '../badge/Badge';


const BASE_URL = import.meta.env.VITE_API_URL;

export const loaderRestaurant = async ({params}) => {
  const { id } = params;
  const response = await fetch(`${BASE_URL}/api/foods/${id}`);
  const data = await response.json();

  return { restaurant: data };
};



function MenuRest() {
  const { restaurant = [] } = useLoaderData();
  const dispatch = useDispatch();


  function handleAdd(item) {
    dispatch(addFoodToCart(item));
  }
  return (
    <>
      <h2 className='menurest__info--menu--name'>MENU</h2>
      <div>
        {restaurant.food.map((item) => (
          <div key={item.id} className='menurest__info--menu'>
            <img src={item.image} alt="" className='menurest__info--img'/>
            <div className='menurest__info--menu--items'>
              <strong>{item.name}</strong>
            </div>
            <div className='menurest__info--menu--items--price'>$ {Intl.NumberFormat('en-US').format(item.price)}</div>
            <div className='menurest__info--menu--items--rating'>{item.rate} </div>
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
