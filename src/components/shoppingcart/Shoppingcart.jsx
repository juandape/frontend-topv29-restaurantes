import { useSelector } from '../../store';
import Totalbuy from '../totalbuy/Totalbuy';
import Cardlist from '../cardlist/Cardlist';
import { NavLink, useNavigate } from 'react-router-dom';
import './shoppingcart.css';
import CheckoutBtn from '../checkoutbtn/Checkoutbtn';

function ShoppingCart() {
  const state = useSelector();
  const navigate = useNavigate();

  return (
    <>
      <div className='shoppingcart__header'>
        <h1>Your Selected Food</h1>
      </div>
      <div className='shoppingcart__body'>
        <Cardlist products={state.cart} />
      </div>
      <div className='shoppingcart__total'>
        <Totalbuy />
      </div>
      <NavLink to='/payment'>
        <div className='shoppingcart__checkout'>
          <CheckoutBtn />
        </div>
      </NavLink>

      <div className='shoppingcart__back'>
        <button
          onClick={() => navigate(-1)}
          className='shoppingcart__back--button'
        >
          {'<-'} Back to menu
        </button>
      </div>
    </>
  );
}

export default ShoppingCart;
