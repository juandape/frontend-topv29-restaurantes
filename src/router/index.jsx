import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Root from '../layout/root';
import AboutPage from '../pages/about/About';
import Home, { loaderRestaurants } from '../pages/home/Home';
import NotFound from '../pages/notfound/NotFound';
import Registerform from '../components/registerform/Registerform';
import Feedback from '../components/feedback/Feedback';
import Restaurants from '../pages/restaurants/Restaurants';
import Access from '../components/access/Access';
import LoginForm from '../components/loginform/Loginform';
import CardRest, { loaderRestaurant } from '../components/cardrest/Cardrest';
import RestFoodTypeFilter from '../components/restfoodtypefilter/Restfoodtypefilter';
import Booking from '../components/booking/Booking';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loaderRestaurants,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: 'register',
        element: <Registerform />,
      },
      {
        path: 'restaurant',
        element: <Restaurants />,
      },
      {
        path: 'access',
        element: <Access />,
      },

      {
        path: 'restaurant-card/:id',
        element: <CardRest />,
        loader: loaderRestaurant,
      },
      {
        path: 'restaurant-by-type/:foodtype',
        element: <RestFoodTypeFilter />,
        loader: loaderRestaurant,
      },
    ],
  },
]);

export default router;
