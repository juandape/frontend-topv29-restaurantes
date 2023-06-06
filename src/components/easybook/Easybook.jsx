import react from 'react';
import './easybook.css';
import { BiMobileAlt, BiMobileVibration } from 'react-icons/bi';
import { GiCampCookingPot } from 'react-icons/gi'
import { MdDeliveryDining } from 'react-icons/md'

const Easybook = () => {
  return (
    <div className='container__easybook'>
      <div className='container__easybook--title'>Super Easy Booking</div>
      <div className='container__easybook--text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        cumque optio reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
      <div className='container__easybook__steps'>
        <div className='container__easybook__steps--step1'>
          <BiMobileAlt style={{fontSize: '30px', color: 'black'}} />
          Order Food Threw Website or App
        </div>
        <div className='container__easybook__steps--line1'></div>
        <div className='container__easybook__steps--step2'>
          <BiMobileVibration style={{fontSize: '30px', color: 'black'}} />
          User Recives Confirmation
        </div>
        <div className='container__easybook__steps--line2'></div>
        <div className='container__easybook__steps--step3'>
          <GiCampCookingPot style={{fontSize: '30px', color: 'black'}} />
          Order Processing & Food Preparation
        </div>
        <div className='container__easybook__steps--line3'></div>
        <div className='container__easybook__steps--step4'>
          <MdDeliveryDining style={{fontSize: '30px', color: 'black'}} />
          Food Is On Its Way To Deliver
        </div>
      </div>
    </div>
  );
};

export default Easybook;
