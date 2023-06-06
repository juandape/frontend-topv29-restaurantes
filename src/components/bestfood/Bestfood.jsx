import './bestfood.css';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';

const Bestfood = () => {
  return (
    <div className='container__bestfood'>
      <div className='container__bestfood__text'>
        <div className='container__bestfood__text--title'>
          <h2>The Best Food app</h2>
        </div>
        <div className='container__bestfood__text--description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          recusandae officiis quasi magnam voluptates libero quibusdam aliquid!
          Iure architecto ipsa, culpa totam incidunt aliquam dolores, delectus
          recusandae minus, iste nemo!
        </div>
        <div className='container__bestfood__text__download'>
          <div className='container__bestfood__text__download--title'>
            <h3>Download App Now...</h3>
          </div>
          <div className='container__bestfood__text__download--icons'>
          <div className='container__bestfood__text__download--apple'>
            <AiFillApple />
            Apple Store
          </div>
          <div className='container__bestfood__download--android'>
            <AiFillAndroid />
            Google Play
            </div>
            </div>
        </div>
      </div>
      <div className='container__bestfood__img'>
        <img
          src='https://blog.tubikstudio.com/wp-content/uploads/2018/04/burger-app-food-delivery-ui-case-study-tubik-1-1.jpg'
          alt='food app'
        />
      </div>
    </div>
  );
};

export default Bestfood;
