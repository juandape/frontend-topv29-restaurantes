import { Outlet, useNavigation } from 'react-router-dom';
import React from 'react';
import Delete from '../components/Delete/Delete';

import Header from '../components/header/Header';

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main>{navigation.state === 'loading' ? 'Loading...' : <Outlet />}</main>
      <Delete />

    </>
  );
}

export default Root;
