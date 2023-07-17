import Swal from 'sweetalert2';
import { useState } from 'react';
import { useSelector, useDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';
import './useraccount.css';
import axios from 'axios';
import UploadImage from '../uploaderForm/uploader';
import { setAcount } from '../../store/actions';


const defaultFormData = {
  firstName: '',
  lastName: '',
  avatar: '',
};

const BASE_URL = import.meta.env.VITE_API_URL;

function UserAccount() {
  const navigate = useNavigate();
  const state = useSelector();
  const dispatch = useDispatch();
  const id = state.login.profile.id;
  const url = `${BASE_URL}/api/users/${id}`;
  const [formData, setFormData] = useState(defaultFormData);



  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData(formData);
    axios.patch(url, formData);
    const fullName = formData.firstName + " " + formData.lastName;
    const avatar = formData.avatar;
    const dataLocalStore = { ...state, state: state.login.profile.fullName = fullName, state: state.login.profile.avatar = avatar }

    localStorage.setItem('dataUser', JSON.stringify(dataLocalStore.login));
    dispatch(setAcount(formData));

    Swal.fire({
      icon: 'info',
      text: 'Perfil updated',
    });


    navigate('/');

  };

  return (
    <div className='userpanel'>
      <div className='userpanel__container'>
        <div className='userpanel__container__title'>User Account</div>
        <div className='userpanel__container__form'>
          <form
            onSubmit={handleSubmit}
            className='userpanel__container__form--form'
          >
            <div className='userpanel__container__form--form__input'>
              <label
                htmlFor=''
                className='userpanel__container__form--form__input--label'
              >
                Name
              </label>
              <input
                type='text'
                name='firstName'
                className='userpanel__container__form--form__input--input'
                placeholder='new name'
                onChange={handleChange}
                required
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
                name='lastName'
                className='userpanel__container__form--form__input--input'
                placeholder='new lastname'
                onChange={handleChange}
                required
              />
            </div>
            <div className='userpanel__container__form--form__input'>
              <label
                htmlFor='image-upload'
                className='userpanel__container__form--form__input--label'
              >
                Select Avatar
              </label>
              <UploadImage
              setData={setFormData}
              dataObj={formData}
              name={"avatar"}
              required
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
