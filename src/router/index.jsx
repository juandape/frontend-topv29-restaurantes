import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Root from '../layout/root';
import AboutPage from '../pages/about/About';
import Home from '../pages/home/Home';
// import ProductCard, { loaderProduct } from "../components/ProductCard";
import NotFound from '../pages/notfound/NotFound';
import LoginFormAdmin from '../components/loginform/Loginformadmin';
import LoginFormUser from '../components/loginform/Loginformuser';
import RegFormAdmin from '../components/registerform/Regformadmin';
import RegFormUser from '../components/registerform/Regformuser';
import Feedback from '../components/feedback/Feedback';
// import Cardlist from '../components/cardlist/Cardlist';
import Commingsoon from '../pages/commingsoon/Commingsoon';
import Access from '../components/access/Access';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: loaderProducts,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'loginadmin',
        element: <LoginFormAdmin />,
      },
      {
        path: 'loginuser',
        element: <LoginFormUser />,
      },
      {
        path: 'regadmin',
        element: <RegFormAdmin />,
      },
      {
        path: 'reguser',
        element: <RegFormUser />,
      },
      {
        path: 'feedback',
        element: <Feedback />,
      },
      {
        path: 'restaurant',
        element: <Commingsoon />,
      },
      {
        path: 'access',
        element: <Access />,
      },

      // {
      //   path: "product-card/:id",
      //   element: <ProductCard />,
      //   loader: loaderProduct,
      // },
    ],
  },
]);

export default router;
