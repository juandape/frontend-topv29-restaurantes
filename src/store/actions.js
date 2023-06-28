import { ADD_TO_CART, SET_LOADING, REMOVE_FROM_CART, SIGN_SESSION} from './types';

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


export const session = (signsession) => ({
  type: SIGN_SESSION,
  payload: signsession,
});
