import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './foodtypefilter.css';
const BASE_URL = import.meta.env.VITE_API_URL;
const url = `${BASE_URL}/api/restaurants`;

function FilterCat() {
  const [categ, setcateg] = useState([]);
  // const [isLoadingcateg, setLoadingcateg] = useState(true);
  useEffect(() => {
    const getFood = async () => {
      const { data, status } = await axios.get(url);
      // setLoadingcateg(false);
      if (status === 200) setcateg(data);
    };
    getFood();
  }, []);


  function handleFoodClick(restType) {
    const rest = categ.find((rest) => rest.restType === restType);
    if (rest) {
      window.alert(rest.category);
    }
  }

  return (
    <div>
      {/* {isLoadingFoods
        ? <span className='loader'>Loading...</span>
        : ( */}
          <div className='container__food'>
            <button
              className='container__food--button'
              onClick={() => handleFoodClick('mexican')}
            >
              <label className='container__food--label' htmlFor=''>
                Mexican
              </label>
            </button>
            <button className='container__food--button' onClick={() => handleFoodClick('fastfood')}>
              <label className='container__food--label' htmlFor=''>
                Fast Food
              </label>
            </button>
            <button className='container__food--button' onClick={() => handleFoodClick('asian')}>
              <label className='container__food--label' htmlFor=''>
                Asian
              </label>
            </button>
            <button
              className='container__food--button'
              onClick={() => handleFoodClick('bakeries')}
            >
              <label className='container__food--label' htmlFor=''>
                Bakeries
              </label>
            </button>
            <button className='container__food--button' onClick={() => handleFoodClick('italian')}>
              <label className='container__food--label' htmlFor=''>
                Italian
              </label>
            </button>
            <button className='container__food--button' onClick={() => handleFoodClick('german')}>
              <label className='container__food--label' htmlFor=''>
                German
              </label>
            </button>
          </div>
      {/* )} */}
    </div>
  );
}

export default FilterCat;
