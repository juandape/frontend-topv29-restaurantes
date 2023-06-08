import { useEffect, useState } from 'react';
import './Cardrest.css';
import PropTypes from 'prop-types';



const Cardrest = () => {
  const [dataRestaurant, setDataRestaurant]=useState([])

  useEffect(()=>{
    apiRestaurant()
  },[])

  const apiRestaurant= async ()=>{
    const api= await fetch(`https://api-restaurants.onrender.com/api/restaurants`,{headers: {
      'Content-Type': 'application/json',
    }})
    const data= await api.json()

    return setDataRestaurant(data)
  }

  console.log(dataRestaurant)

  return (<>
  <div className='container'>
  {dataRestaurant.map((item)=>

  <div className='cardrest'>
  <div className='cardrest__logo'>
    <img src={item.logo} alt='img' className='cardrest__img'/>
  </div>
  <div className='cardrest__info'>
    <div className='cardrest__info--name'>
      <h2>{item.name}</h2>
    </div>
    <div className='cardrest__info--category'>
      <h4> {item.category}</h4>
    </div>
    <div className='cardrest__info--schedules'>
      <p> Since: {item.schedules}</p>
    </div>
    <div className='cardest__info--adress'>
      <p> Find us in {item.address}</p>
    </div>
    <div className='cardest__info--link'>
      <button className='cardrest__button'>
        <p>See us!</p>
      </button>
    </div>
  </div>

</div>)}
</div>
</>

  );
}



Cardrest.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  schedules: PropTypes.object.isRequired,
  adress: PropTypes.object.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Cardrest;
