import { useSelector } from '../../store';
import { GrCart } from 'react-icons/gr';

function Badge() {
  const state = useSelector();
  const amountItems = state.cart.length;
  return <div className='badge'>
    <GrCart /> {amountItems}
  </div>;
}

export default Badge;
