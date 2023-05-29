import React, { useState } from 'react';

function EatFilter() {
  return (
    <div>
      <select name='' id=''>
        <option value='' disabled selected hidden>
          escoge que quieres
        </option>
        <option value='1'>Desayunar</option>
        <option value='2'>Almorzar</option>
        <option value='3'>Comer</option>
      </select>
      <button>Go</button>
    </div>
  );
}

export default EatFilter;
