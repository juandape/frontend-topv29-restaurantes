import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './Star.css'

function Star() {
  const [rating, setRating]=useState(null);
  const [hover, setHover]=useState(null);
  const handleclick = (event)=>{
    const { value } = event.target;
    setRating(value);
  };

  return (
    <div>
      {[...Array(5)].map((star, item)=>{
        const ratingValue = item + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              placeholder='prueba'
              className="Input_Star"
              value={ratingValue}
              onClick={handleclick}
            />

            <FaStar
              className="Star"
              color={ratingValue <= (hover || rating) ? 'ffc600' : '#e4e5e9'}
              size={30}
              onMouseEnter={()=> setHover(ratingValue)}
              onMouseLeave={()=> setHover(null)}
            />
          </label>
        );
      })}
      <p>the rating is: {rating}</p>


    </div>
  )
}

export default Star
