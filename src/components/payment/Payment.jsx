import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from '../../store';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51NNg21IgZKkg1b8zBdxd93m7bCg24EjScnlqVyl5vSjCHqjV3igRtvPDRaccofY5Auxj3MNps3CWdAiYsr4I3Eay00P3stSlkg'
);

const Payment = () => {
  const state = useSelector();
  
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
