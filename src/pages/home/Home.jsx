// import { Link, useLoaderData } from "react-router-dom";
import React from 'react';
import RestFilter from '../../components/filtrorest/Filtrorestaurant';
import EatFilter from '../../components/filtrocomida/Filtrocomida';
import './home.css';
import LoginFormAdmin from '../../components/loginform/Loginformadmin';
import RegFormAdmin from '../../components/registerform/Regformadmin';
import LoginFormUser from '../../components/loginform/Loginformuser';
import RegFormUser from '../../components/registerform/Regformuser';

function HomePage() {
  return (
    <>
      {/* <RestFilter /> */}
      <div className='container__home'>
        {/* <EatFilter /> */}
        <h1>RESTAURANTES</h1>
        <p>texto aqui</p>
        <p>imagen por aca</p>
        <RegFormAdmin />
        <RegFormUser />
        <LoginFormAdmin />
        <LoginFormUser />
      </div>
    </>
  );
}

export default HomePage;

// // eslint-disable-next-line react-refresh/only-export-components
// export const loaderProducts = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");

//   const data = await response.json();

//   return { products: data };
// };
