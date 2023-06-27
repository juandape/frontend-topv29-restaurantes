import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { SET_LOADING, ADD_TO_CART, SET_FOOD, REMOVE_FROM_CART } from './types';

function reducer(state, action) {
  switch (action.type) {
    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case SET_FOOD: {
      return { ...state, foods: action.payload };
    }
    case ADD_TO_CART: {
      const newFood = action.payload;
      const newCart = [...state.cart, newFood];
      const total = newCart.reduce((acc, curr) => acc + curr.price, 0);
      console.log("🚀 ~ file: reducer.js:16 ~ reducer ~ total:", total)

      return { ...state, cart: newCart, total };
    }
    case REMOVE_FROM_CART: {
      const foodToRemove = action.payload;
      const newCart = state.cart.filter((food) => food.id !== foodToRemove.id);
      const total = newCart.reduce((acc, curr) => acc + curr.price, 0);
      return { ...state, cart: newCart, total };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
export default reducer;
