import { useSelector } from '../../store';

function Totalbuy() {
  const state = useSelector();
  return (
    <div className='totalbuy'>
      <div className='totalbuy__total'>
        <span>Total: $ {Intl.NumberFormat('en-US').format(state.total)}</span>
      </div>
      <button className='totalbuy__button'>Checkout</button>
    </div>
  );
}

export default Totalbuy;
