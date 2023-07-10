import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from '../../store';
import './Star.css';

const defaultFormData = {
  rating: '',
};

function Star() {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const handleclick = (event) => {
    const { value } = event.target;
    setRating(value);
    if (value === rating) setRating(defaultFormData);
    // setRating(defaultFormData);
  };

  useEffect(() => {
    dispatch({ type: 'SET_RATING', payload: rating });
  }, [rating, dispatch]);




  return (
    <div>
      {[...Array(5)].map((star, item) => {
        const ratingValue = item + 1;
        return (
          <label key={item}>
            <input
              type='radio'
              name='rating'
              className='Input_Star'
              value={ratingValue}
              onClick={handleclick}
            />

            <FaStar
              className='Star'
              color={ratingValue <= (hover || rating) ? 'ffc600' : '#e4e5e9'}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Star;
