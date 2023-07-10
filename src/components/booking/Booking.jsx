import { useState } from 'react';
import Swal from 'sweetalert2';
import './booking.css';

const defaultForm = {
  name: '',
  email: '',
  date: '',
  time: '',
  guests: '',
};

function Booking() {
  const [form, setForm] = useState(defaultForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Swal.fire({
      icon: 'info',
      text: 'Your booking has been confirmed!',
    });
    setForm(defaultForm);
  }

  return (
    <div className='booking'>
      <h1 className='booking__title'>Booking a Table</h1>
      <p className='booking__text'>
        Book a table for your next meal at our restaurant.
      </p>
      <form className='booking__form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name' className='booking__form--label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your name..'
            className='booking__form--input'
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {' '}
          <label htmlFor='email' className='booking__form--label'>
            Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Your email..'
            className='booking__form--input'
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {' '}
          <label htmlFor='date' className='booking__form--label'>
            Date
          </label>
          <input
            type='date'
            id='date'
            name='date'
            className='booking__form--input'
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {' '}
          <label htmlFor='time' className='booking__form--label'>
            Time
          </label>
          <input
            type='time'
            id='time'
            name='time'
            className='booking__form--input'
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {' '}
          <label htmlFor='guests' className='booking__form--label'>
            Guests
          </label>
          <select
            id='guests'
            name='guests'
            className='booking__form--input--guests'
            value={form.guests}
            onChange={handleChange}
            required
          >
            <option value='' disabled selected hidden>
              select
            </option>
            <option value='1'>1 guest</option>
            <option value='2'>2 guests</option>
            <option value='3'>3 guests</option>
            <option value='4'>4 guests</option>
            <option value='5'>5 guests</option>
            <option value='6'>6 guests</option>
            <option value='7'>7 guests</option>
            <option value='8'>8 guests</option>
            <option value='9'>9 guests</option>
            <option value='10'>10 guests</option>
          </select>
        </div>
        <div>
          <button type='submit' className='booking__form--button'>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
