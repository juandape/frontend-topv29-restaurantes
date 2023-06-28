import { useSelector } from '../../store';
import { GrCart } from 'react-icons/gr';

function Badge() {
  const state = useSelector();
  const amountItems = Object.values(state.cart).reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className='badge'>
      <GrCart /> {amountItems}
    </div>
  );
}
export default Badge;
