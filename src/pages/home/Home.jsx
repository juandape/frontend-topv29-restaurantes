// import { Link, useLoaderData } from "react-router-dom";
import React from 'react';
import RestFilter from '../../components/filtrorest/Filtrorestaurant';
import EatFilter from '../../components/filtrocomida/Filtrocomida';
import restaurantsdata from '../../assets/restaurantsdata.json';
import './home.css';




function HomePage() {
  return (
    <div className='container__home'>
      <h1>RESTAURANTES</h1>
      <RestFilter />
      <EatFilter />
      <p>texto aqui</p>
      <p>imagen por aca</p>
    </div>
  );
}

export default HomePage;

// // eslint-disable-next-line react-refresh/only-export-components
// export const loaderProducts = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");

//   const data = await response.json();

//   return { products: data };
// };
