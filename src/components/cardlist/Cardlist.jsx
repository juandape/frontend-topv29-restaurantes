import { from } from 'rxjs';
import Cardrest from '../cardrest/Cardrest';
import {useSelector} from '../../store';

const Cardlist = () => {
  const state = useSelector();
  return (
    <div className='cardlist'>
      {state.foods.map((rest) => {
        <Cardrest key={rest.id} rest={rest} />;
      })}
    </div>
  );
};

// Cardlist.defaultProps = {
//   cart: [],
// };

export default Cardlist;
