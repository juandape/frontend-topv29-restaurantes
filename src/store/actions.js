import {
  ADD_TO_CART,
  SET_LOADING,
  REMOVE_FROM_CART,
  SET_LOGIN,
  SIGN_SESSION,
  CLEAR_CART,
  SET_RATING,
  SET_ACOUNT,
} from './types';
/**
 * Creates an action to set loading state
 * @param {boolean} isLoading
 * @returns
 */
export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

/**
 * Creates an action to set foods
 * @param {Object} foods
 * @returns
 */
export const addFoodToCart = (food) => ({
  type: ADD_TO_CART,
  payload: food,
});

export const removeFoodFromCart = (food) => ({
  type: REMOVE_FROM_CART,
  payload: food,
});

export const login = (dataUser) => ({
  type: SET_LOGIN,
  payload: dataUser,
});

export const session = (signsesion) => ({
  type: SIGN_SESSION,
  payload: signsesion,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const setRating = () => ({
  type: SET_RATING,
  payload: rating,
});


export const setAcount = (dataUser) => ({
  type: SET_ACOUNT,
  payload: dataUser,
});
