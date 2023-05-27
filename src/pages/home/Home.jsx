// import { Link, useLoaderData } from "react-router-dom";

import React from 'react';
import './home.css';
import MapMex from '../../components/Ubication/Map-MexicanSabor';
import credentials from '../../components/Ubication/credentials';
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapKey}`
function HomePage() {
  return (
    <div>
      <h1>RESTAURANTES</h1>
      <p>texto aqui</p>
      <p>imagen por aca</p>
      <MapMex
        googleMapURL = {mapURL}
        containerElement = {<div style={{height:'400px'}}/>}
        mapElement = {<div style={{height:'100%'}}/>}
        loadingElement = {<p>Wait c:</p>}
      />
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
