/* eslint-disable */
import { useSelector } from '../../store';
import Cardlist from '../cardlist/Cardlist';
import CheckoutForm from '../checkoutform/Checkoutform';
import Totalbuy from '../totalbuy/Totalbuy';

const Payment = () => {
  const state = useSelector();

  return (
    <>
      <div>
        <h1>Item list</h1>
        <Cardlist products={state.cart} />
        <Totalbuy />
      </div>
      <CheckoutForm />
    </>
  );
};

export default Payment;
