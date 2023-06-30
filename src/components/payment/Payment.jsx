/* eslint-disable */
import { useSelector } from '../../store';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from '../checkoutform/Checkoutform';
import Totalbuy from '../totalbuy/Totalbuy';
import './payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const state = useSelector();
  const { cart } = state;
  const products = Object.values(cart).map((item) => {
    return (
      <>
        <div className='payment__items'>
          <div key={item.product.id} className='payment__items--name'>
            {item.product.name}
          </div>
          <div className='payment__items--quantity'>
            <div>{item.quantity} Product</div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <h1 className='payment--title'>Review</h1>
      {products}
      <Totalbuy />
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
