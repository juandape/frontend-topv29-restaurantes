import { Outlet, useNavigation } from 'react-router-dom';
import React from 'react';

import Delete from '../components/Delete/Delete';

import Header from '../components/header/Header';
import Formularioedit from '../components/Formularioedit/Formularioedit';

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main>{navigation.state === 'loading' ? 'Loading...' : <Outlet />}</main>

      <Delete />
      <Formularioedit />


    </>
  );
}

export default Root;
