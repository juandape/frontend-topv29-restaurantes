import { Outlet, useNavigation } from 'react-router-dom';
import React from 'react';

import Delete from '../components/Delete/Delete';
import Star from '../components/Star/Star';

import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer';

import FormularioAdd from '../components/formAdd/FormAdd';
import Formularioedit from '../components/Formularioedit/Formularioedit';


function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main>{navigation.state === 'loading' ? 'Loading...' : <Outlet />}</main>
      {/* <Delete /> */}
      {/* <Formularioedit /> */}
      {/* <Star /> */}
    </>
  );
}

export default Root;
