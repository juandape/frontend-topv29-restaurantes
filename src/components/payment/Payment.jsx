/* eslint-disable */
import { useSelector } from '../../store';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from '../checkoutform/Checkoutform';
import Totalbuy from '../totalbuy/Totalbuy';

const Payment = () => {
  const navigate = useNavigate();
  const state = useSelector();
  const { cart } = state;
  const products = Object.values(cart).map((item) => {
    return (
      <>
        <div className='cardlist__items'>
          <div key={item.product.id} className='cardlist__items--name'>
            {item.product.name}
          </div>
          <div className='cardlist__items--show'>
            <div>{item.quantity}</div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
    <h1>Item list</h1>
      <div>
        {products}
        <Totalbuy />
      </div>
      <CheckoutForm />
      <div className='shoppingcart__back'>
        <button
          onClick={() => navigate(-1)}
          className='shoppingcart__back--button'
        >
          {'<-'} Back to select
        </button>
      </div>
    </>
  );
};

export default Payment;
