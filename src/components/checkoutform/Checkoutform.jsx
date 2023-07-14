import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from '../../store';
import './checkoutform.css';
import Swal from 'sweetalert2';
import UseAnimations from 'react-useanimations';
import { useNavigate } from 'react-router-dom';
import { setLoading, clearCart } from '../../store/actions';
import loading from 'react-useanimations/lib/loading';

function CheckoutForm() {
  const state = useSelector();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(setLoading(true));
      const card = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: state.total / 10,
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
        dispatch(clearCart());
        navigate('/');
      }
      if (error === 'card_declined') {
        return Swal.fire('payment failed', 'Please check your card details');
      }
    } catch (error) {
      console.log(error);
    }
    finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='checkoutform'>
        <h3 className='checkoutform--title'>Payment Method</h3>
        <div className='checkoutform--element'>
          <div>
            <label className='checkoutform--label'>Delivery Direction</label>
            <input type='text' className='checkoutform--input' required />
          </div>
          <div>
            <label className='checkoutform--label'>Mobile Number</label>
            <input type='number' className='checkoutform--input' required />
          </div>
          <div className='checkoutform--card'>
            <label className='checkoutform--label card'>Card Details</label>
            <CardElement />
          </div>
        </div>
          {(state.isLoading === true) ? (
          <div><UseAnimations animation={loading} size={30} strokeColor='orange' /></div>
          ) : (
        <div>
            <button type='submit' className='checkoutform--button'>
              PAY
            </button>
        </div>
          )}
      </form>
    </>
  );
}

export default CheckoutForm;
