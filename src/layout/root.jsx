import { Outlet, useNavigation } from 'react-router-dom';
import React from 'react';

import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer';

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main>{navigation.state === 'loading' ? 'Loading...' : <Outlet />}</main>
      <Footer />
    </>
  );
}

export default Root;
