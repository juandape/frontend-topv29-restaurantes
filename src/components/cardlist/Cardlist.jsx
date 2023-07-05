import { useDispatch } from '../../store';
import { removeFoodFromCart, addFoodToCart } from '../../store/actions';
import { BsTrash } from 'react-icons/bs';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';
import './cardlist.css';

const Cardlist = ({ products = [] }) => {
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFoodFromCart(product));
  };

  const handleAdd = (product) => {
    dispatch(addFoodToCart(product));
  };


  return (
    <div className='cardlist'>
      {Object.values(products).map((item) => {
        return (
          <>

            <div className='cardlist__items' key={item.id}>
              <img src={item.product.image} alt="food_img"  className='cardlist__items--img'/>
              <div className='cardlist__items--name'>
                {item.product.name}
              </div>
              <div className='cardlist__items--price'>
                $ {Intl.NumberFormat('en-US').format(item.product.price)}
              </div>
              <div className='cardlist__items--show'>
                <button
                  onClick={() => handleRemove(item.product)}
                  className='cardlist__items--button'
                >
                  {(item.quantity > 1) ? <GrFormSubtract /> : <BsTrash />}

                </button>
                <div className='cardlist__items--quantity'>{item.quantity}</div>
                <button
                  className='cardlist__items--button'
                  onClick={() => handleAdd(item.product)}
                >
                  <GrFormAdd />
                </button>

              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cardlist;
