import React from 'react'
import './Delete.css'

function Delete() {
  const handleDelete = async() => {
    const id=5;
    const url = `https://api-restaurants.onrender.com/api/restaurants/${id}`;
    const config = {
      method: 'DELETE',
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <button onClick={handleDelete} className="Delete--btn">Delete</button>

  )
}
export default Delete;
