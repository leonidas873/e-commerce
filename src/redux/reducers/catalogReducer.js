import { SET_CATALOG, SET_ACTIVE_CATEGORY } from "../actionTypes/actionTypes";

const initialState = {
  catalog: [],
  activeCategory:""
};

const catalogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATALOG:
      return {
        ...state,
        catalog: payload,
      };
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default catalogReducer;
