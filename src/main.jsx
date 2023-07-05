import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AppProvider } from './store';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51NNg21IgZKkg1b8zBdxd93m7bCg24EjScnlqVyl5vSjCHqjV3igRtvPDRaccofY5Auxj3MNps3CWdAiYsr4I3Eay00P3stSlkg'
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <AppProvider>
    <Elements stripe={stripePromise}>
      <RouterProvider router={router} />
    </Elements>
    </AppProvider>

);
