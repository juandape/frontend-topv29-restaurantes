import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './checkoutform.css';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    console.log(
      '🚀 ~ file: Checkoutform.jsx:12 ~ handleSubmit ~ paymentMethod:',
      paymentMethod
    );

    const payload = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 1000,
        paymentMethod,
      }),
    };

    const BASE_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${BASE_URL}/api/payments`, payload);
    const data = await response.json();
    console.log(data);


  };

  const handleClick = () => {
    alert('Payment successful');
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='checkoutform'>
        <h3 className='checkoutform--title'>Payment Method</h3>
        <div className='checkoutform--element'>
          <CardElement />
        </div>
        <div>
          <button type='submit' className='checkoutform--button' onClick={handleClick}>
            PAY
          </button>
        </div>
      </form>
    </>
  );
}

export default CheckoutForm;
