import { SET_LOGIN } from "../actionTypes/actionTypes";

const initialState = {
  login: false,
  
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN:
      return {
        ...state,
        login: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
