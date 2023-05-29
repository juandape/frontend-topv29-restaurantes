
import React from 'react';
import './home.css';
import Addfood from '../../components/formaddfood/Addfood';

function HomePage() {
  return (
    <div className='container__home'>
      <h1>RESTAURANTES</h1>
      <p>texto aqui</p>
      <p>imagen por aca</p>
      <Addfood/>
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
