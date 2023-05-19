import React, { useState } from 'react';
import './filtrocomida.css'

function EatFilter() {
  return (
    <div className='container__food'>
      <button className='container__food--button'>
        <label className='container__food--label' htmlFor="">Desayuno</label>
        <img className='container__food--img' src="../public/images/desayuno.jpg" alt="desayuno" />
      </button>
      <button className='container__food--button'>
      <label className='container__food--label' htmlFor="">Almuerzo</label>
        <img className='container__food--img' src="../public/images/almuerzo.jpg" alt="desayuno" />
      </button>
      <button className='container__food--button'>
      <label className='container__food--label' htmlFor="">Cena</label>
        <img className='container__food--img' src="../public/images/cena.jpg" alt="desayuno" />
      </button>
      <button className='container__food--button'>
      <label className='container__food--label' htmlFor="">Fast Food</label>
        <img className='container__food--img' src="../public/images/fastfood.jpg" alt="desayuno" />
      </button>
    </div>
  );
}

export default EatFilter;
