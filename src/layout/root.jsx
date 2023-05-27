import { Outlet, useNavigation } from 'react-router-dom';
import React from 'react';
import Star from '../components/Star/Star';

import Header from '../components/header/Header';

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main>{navigation.state === 'loading' ? 'Loading...' : <Outlet />}</main>
      <Star />
    </>
  );
}

export default Root;
