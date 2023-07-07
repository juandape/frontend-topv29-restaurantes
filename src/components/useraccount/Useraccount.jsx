import Swal from 'sweetalert2';
import { useState } from 'react';
import './useraccount.css';

const defaultFormData = {
  name: '',
  lastname: '',
  email: '',
  avatar: '',
}


function UserAccount() {
const [formData, setFormData] = useState(defaultFormData);

function handleSubmit(event) {
  event.preventDefault();
  Swal.fire('Perfil updated');
  
}

  return (
    <div className='userpanel'>
      <div className='userpanel__container'>
        <div className='userpanel__container__title'>
          User Account
        </div>
        <div className='userpanel__container__form'>
          <form onSubmit={handleSubmit} className='userpanel__container__form--form'>
            <div className='userpanel__container__form--form__input'>
              <label
                htmlFor=''
                className='userpanel__container__form--form__input--label'
              >
                Name
              </label>
              <input
                type='text'
                name='name'
                className='userpanel__container__form--form__input--input'
                placeholder='new name'
              />
            </div>
            <div className='userpanel__container__form--form__input'>
              <label
                htmlFor=''
                className='userpanel__container__form--form__input--label'
              >
                Last Name
              </label>
              <input
                type='text'
                name='lastname'
                className='userpanel__container__form--form__input--input'
                placeholder='new lastname'
              />
            </div>
            <div className='userpanel__container__form--form__input'>
              <label
                htmlFor=''
                className='userpanel__container__form--form__input--label'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                className='userpanel__container__form--form__input--input'
                placeholder='new email'
              />
            </div>
            <div className='userpanel__container__form--form__input'>
              <label
                for='image-upload'
                className='userpanel__container__form--form__input--label'
              >
                Select Avatar
              </label>
              <input
                id='image-upload'
                type='file'
                name='avatar'
                accept='.jpg,.png,.jpeg,.gif'
                className='userpanel__container__form--form__input--input'
              />
            </div>
            <div className='userpanel__container__button'>
              <button className='userpanel__container__button--button'>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
