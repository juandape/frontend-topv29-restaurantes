import { Outlet, useNavigation } from 'react-router-dom';
import React from 'react';
import Header from '../components/header/Header';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';

function Root() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <main>
        {navigation.state === 'loading' ? (
          <UseAnimations animation={loading} size={56} wrapperStyle={{marginTop: '100px'}} strokeColor='orange' />
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}

export default Root;
