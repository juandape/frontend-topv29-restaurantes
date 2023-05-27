import React, {useState} from "react";
import './Addfood.css'

function Addfood () {
  const [food, setFood] = useState({});

    const handleChange = (e) => {
      const {name, value} = e.target;
      // eslint-disable-next-line no-undef
      setFood({
        ...food,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newFood = {
        ...food,
        id: Date.now(),
      };
      try {
        const options = {
          method: 'POST',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify.apply(newFood),
        };
        const URL = 'https://api-restaurants.onrender.com/api/restaurants/id/foods';
        const response = await fetch (URLS, options);
        const data = await response.json();
      } catch (error){
        console.log(error)
      }
    };

    return (
      <form className="main__contact-form" onSubmit={handleSubmit}>
        <h1 className="Form__ADD">ADD food</h1>
        <div className="contact-form__column">
          <label className="contact-form__label">Name food:  </label>
          <input
            type="text"
            name="name"
            placeholder="Ingresa el nombre"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>
        <div className="contact-form__column">
          <label className="contact-form__label">Price:   </label>
          <input
            type="text"
            name="schedules"
            placeholder="Ingresa el precio"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>
        <div className="contact-form__column">
          <label className="contact-form__label">Reference photo:   </label>
          <input
            type="text"
            name="logo"
            placeholder="LINK photo"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>
        <div className="contact-form__column">
          <label className="contact-form__label">Rate  </label>
          <input
            type="text"
            name="foods"
            placeholder="Ingrese calificación"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>



        <button type="submit" className="container__filter--button">
          Agregar comida
        </button>
      </form>
  );
};

export default Addfood;