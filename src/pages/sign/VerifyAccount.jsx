import{useParams } from 'react-router-dom';
import {activate } from '../../services/index';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from '../../store';
import { login } from '../../store/actions';




import Swal from 'sweetalert2';

import './verifyaccount.css';

function  VerifyAccount  () {

  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

    async function handleClick (){

      const response = await activate(token);
      const data = await response.json();
      console.log(data);


      if(response.status === 200){
      localStorage.setItem('dataUser', JSON.stringify(data));


        Swal.fire({
            icon: 'success',
            title: 'Registration successful',
            text: 'email is sent for account activation !',
          });

          dispatch(login(data));
          navigate("/");


      } else{

        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: 'Please try again.',
        });

      }



    }


  return (

    <div className="container-verify-account">
      <div className="verify-account">
        <header className="activate-account_header">
             <span className="activate-account_header_title">Restaurants!!</span>
        </header>
        <div className="activate-account_content" >
          <h1>Activate your account</h1>
          <button type='button' className='activate_button' onClick={handleClick}>
            Click Activate Your Account.

          </button>
          <p>Thank you for registering in Restaurants App.</p>

        </div>

      </div>
    </div>
  )
}

export default VerifyAccount;
