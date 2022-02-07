import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import catalogReducer from './catalogReducer';


export const reducers = combineReducers({
    catalog:catalogReducer,
    cart:cartReducer
})