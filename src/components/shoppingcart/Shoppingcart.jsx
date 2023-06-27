import { useSelector } from '../../store';
import Badge from '../badge/Badge';
import Totalbuy from '../totalbuy/Totalbuy';
import Cardlist from '../cardlist/Cardlist';

function ShoppingCart() {
  const state = useSelector();

  return (
    <div className='shoppingcart'>
      <div className='shoppingcart__header'>
        <h1 className='shoppingcart__header--title'>Shopping Cart</h1>
        <Badge />
      </div>
      <div className='shoppingcart__content'>
        <Cardlist products={state.cart} />
        <Totalbuy />
        <div>-----</div>
        <Badge />
      </div>
    </div>
  );
}

export default ShoppingCart;
