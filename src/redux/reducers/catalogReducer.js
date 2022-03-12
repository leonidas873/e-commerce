import { SET_CATALOG, SET_ACTIVE_CATEGORY, SET_SEARCH_QUERY, SET_FILTERS, SET_ALL_COLORS } from "../actionTypes/actionTypes";

const initialState = {
  catalog: [],
  activeCategory:"",
  searchQuery:"",
  filters:{
    priceFrom: '',
    priceTo: '',
    stock: '',
    colors: [],
    typeId: null,
    sort:''
  },
  colors:""
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
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters:payload
      }
      case SET_ALL_COLORS:
        return {
          ...state,
          colors:payload
        }      
    default:
      return {
        ...state,
      };
  }
};

export default catalogReducer;
