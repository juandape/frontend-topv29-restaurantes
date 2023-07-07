import{useParams } from 'react-router-dom';

import Swal from 'sweetalert2';

import './Verifyaccount.css';

function  VerifyAccount  () {

    function handleClick (){
        alert("activaste la cuenta!!")
        Swal.fire({
            icon: 'success',
            title: 'Registration successful',
            text: 'Enjoy all services that we have for you, start now!',
          });
    }

    const {token}= useParams();
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
