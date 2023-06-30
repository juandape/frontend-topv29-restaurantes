import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

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
    console.log("🚀 ~ file: Checkoutform.jsx:12 ~ handleSubmit ~ paymentMethod:", paymentMethod)

    const payload = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 1000,
        paymentMethod,
      }),
    }

    const response = await fetch('/api/payments', payload);
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Checkout Form</h1>
        </div>
          <CardElement />
        <button type='submit'>PAY</button>
      </form>
    </>
  );
}

export default CheckoutForm;
