import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from '../../store';
import './checkoutform.css';
import Swal from 'sweetalert2';
import { CLEAR_CART } from '../../store/types';

function CheckoutForm() {
  const state = useSelector();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    const payload = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: state.total,
        paymentMethod,
      }),
    };

    const BASE_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${BASE_URL}/api/payments`, payload);
    const data = await response.json();
    console.log('🚀 ~ file: Checkoutform.jsx:46 ~ handleSubmit ~ data:', data);

    elements.getElement(CardElement).clear();
    if (response.status === 200) {
      Swal.fire({
        icon: 'info',
        html:
        '<h2>Payment Successful ! Get Ready for delicious food</h2>' +
        '<div>------------</div>' +
        `<h5>Your order number is ${data.payment.id}</h5>`,
      });
      dispatch({ type: CLEAR_CART });
    }
    if (error === 'card_declined') {
      return Swal.fire('payment failed', 'Please check your card details');
    }
  };



  return (
    <>
      <form onSubmit={handleSubmit} className='checkoutform'>
        <h3 className='checkoutform--title'>Payment Method</h3>
        <div className='checkoutform--element'>
          <CardElement />
        </div>
        <div>
          <button
            type='submit'
            className='checkoutform--button'
          >
            PAY
          </button>
        </div>
      </form>
    </>
  );
}

export default CheckoutForm;
