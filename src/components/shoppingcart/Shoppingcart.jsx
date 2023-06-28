import { useSelector } from '../../store';
import Totalbuy from '../totalbuy/Totalbuy';
import Cardlist from '../cardlist/Cardlist';
import { useNavigate } from 'react-router-dom';
import './shoppingcart.css';
import CheckoutBtn from '../checkout/Checkoutbtn';

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

      <div className='shoppingcart__checkout'>
        <CheckoutBtn />
      </div>

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
