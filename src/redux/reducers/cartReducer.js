import { SET_CART_PRODUCTS, DELETE_CART_PRODUCT } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CART_PRODUCTS:
      return {
        ...state,
        cart: payload,
      };
    case DELETE_CART_PRODUCT:
      return {
        ...state,
        cart: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
