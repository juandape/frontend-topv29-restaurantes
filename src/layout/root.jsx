import { Outlet, useNavigation } from 'react-router-dom';
import React from 'react';

import Header from '../components/header/Header';
import FormularioAdd from '../components/FormularioAdd/FormularioAdd';

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main>{navigation.state === 'loading' ? 'Loading...' : <Outlet />}</main>
      <FormularioAdd/>
    </>
  );
}

export default Root;
