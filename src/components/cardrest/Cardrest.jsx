import './Cardrest.css';
import PropTypes from 'prop-types';

const Cardrest = (props) => {
  const { name, schedules, category, adress, logo } = props;

  return (
    <div className='cardrest'>
      <div className='cardrest__logo'>
        <img src={logo} alt='img' className='cardrest__img'/>
      </div>
      <div className='cardrest__info'>
        <div className='cardrest__info--name'>
          <h2>{name}</h2>
        </div>
        <div className='cardrest__info--category'>
          <h4> {category}</h4>
        </div>
        <div className='cardrest__info--schedules'>
          <p> Since {schedules}</p>
        </div>
        <div className='cardest__info--adress'>
          <p> Find us in {adress}</p>
        </div>
        <div className='cardest__info--link'>
          <button className='cardrest__button'>
            <p>See us!</p>
          </button>
        </div>
      </div>
    </div>
  );
};

Cardrest.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  schedules: PropTypes.object.isRequired,
  adress: PropTypes.object.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Cardrest;
