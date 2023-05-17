import { Outlet, useNavigation } from 'react-router-dom';

import Header from '../components/header/Header';

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main>{navigation.state === 'loading' ? 'Loading...' : <Outlet />}</main>
    </>
  );
};

export default Root;
