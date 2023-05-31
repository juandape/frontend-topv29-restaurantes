import React, { useState } from 'react'
import './FormularioAdd.css'


function FormularioAdd() {
  const [Restaurant, setRestaurant] = useState({});

    const handleChange = (event) => {
    const { name, value } = event.target;
    // eslint-disable-next-line no-undef
    setRestaurant(
      {
        ...Restaurant,
        [name]: value,

      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRestaurant = {
      ...Restaurant,
      id: Date.now(),
    };

    console.log(newRestaurant);

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRestaurant),
      };
      const url = 'https://api-restaurants.onrender.com/api/restaurants'
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="main__contact-form" onSubmit={handleSubmit}>
        <h1 className="Form__ADD">ADD Restaurant</h1>
        <div className="contact-form__column">
          <label className="contact-form__label">Name Restaurant:  </label>
          <input
            type="text"
            name="name"
            placeholder="Ingresa el nombre del Restaurante"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>
        <div className="contact-form__column">
          <label className="contact-form__label">Schedules:   </label>
          <input
            type="text"
            name="schedules"
            placeholder="Ingresa el horario del restaurante"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>
        <div className="contact-form__column">
          <label className="contact-form__label">Category:   </label>
          <input
            type="text"
            name="category"
            placeholder="Ingresa la Categoria del restaurante"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>
        <div className="contact-form__column">
          <label className="contact-form__label">foodtype:   </label>
          <input
            type="text"
            name="foodtype"
            placeholder="Ingresa el tipo de Alimento(desayuno almuerzo cena) restaurante"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>
        <div className="contact-form__column">
          <label className="contact-form__label">address:   </label>
          <input
            type="text"
            name="address"
            placeholder="Ingresa la Dirección del restaurante"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>
        <div className="contact-form__column">
          <label className="contact-form__label">logo:   </label>
          <input
            type="text"
            name="logo"
            placeholder="https://picsum.photos/200"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>
        <div className="contact-form__column">
          <label className="contact-form__label">foods:  </label>
          <input
            type="text"
            name="foods"
            placeholder="Ingresa el horario del restaurante"
            className="contact-form__input"
            onChange={handleChange}
            required
            />
        </div>



        <button type="submit" className="container__filter--button">
          Agregar
        </button>
      </form>
  );
};

export default FormularioAdd;
