import { faRoad } from '@fortawesome/free-solid-svg-icons';
import {
  SET_LOADING,
  ADD_TO_CART,
  SET_FOOD,
  REMOVE_FROM_CART,
  SIGN_SESSION
 } from './types';

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
      let newCart;
      if (state.cart[newFood.id] === undefined) {
        newCart = {
          ...state.cart,
          [newFood.id]: { product: newFood, quantity: 1 },
        };
      } else {
        newCart = {
          ...state.cart,
          [newFood.id]: {
            product: newFood,
            quantity: state.cart[newFood.id].quantity + 1,
          },
        };
      }
      const total = Object.values(newCart).reduce(
        (acc, curr) => acc + Number(curr.product.price * curr.quantity),
        0
      );

      return { ...state, cart: newCart, total };
    }
    case REMOVE_FROM_CART: {
      const foodToRemove = action.payload;
      let newCart;
      if (state.cart[foodToRemove.id].quantity === 1) {
        newCart = { ...state.cart };
        delete newCart[foodToRemove.id];
      } else {
        newCart = {
          ...state.cart,
          [foodToRemove.id]: {
            product: foodToRemove,
            quantity: state.cart[foodToRemove.id].quantity - 1,
          },
        };
      }
      const total = Object.values(newCart).reduce(
        (acc, curr) => acc + Number(curr.product.price * curr.quantity),
        0
      );
      return { ...state, cart: newCart, total };
    }

    case SIGN_SESSION: {
      const signsession = action.payload;
      return { ...state, state: state.login.profile.fullName = signsession };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
export default reducer;
