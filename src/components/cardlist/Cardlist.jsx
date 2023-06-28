import { faHouseFloodWater } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from '../../store';
import { removeFoodFromCart } from '../../store/actions';
import './cardlist.css'

const Cardlist = ({ products = [] }) => {
  const dispatch = useDispatch()

  const handleRemove = (items) => {
    console.log(items)
    dispatch(removeFoodFromCart(items))
  }



  return (
    <div className='cardlist'>
      {products.map((items) => {
        return (
          <ul className='cardlist__items'>
            <li key={items.id} className='cardlist__items--name'>{items.name}</li>
            <li className='cardlist__items--price'>$ {Intl.NumberFormat('en-US').format(items.price)}</li>
            <button onClick={()=>handleRemove(items)}>X</button>
          </ul>
        );
      })}
    </div>
  );
};

export default Cardlist;
