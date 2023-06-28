import { useSelector } from '../../store';
import './totalbuy.css';

function Totalbuy() {
  const state = useSelector();
  return (
    <div className='totalbuy'>
      <div className='totalbuy--total'>
        <span>Total: $ {Intl.NumberFormat('en-US').format(state.total)}</span>
      </div>
    </div>
  );
}

export default Totalbuy;
