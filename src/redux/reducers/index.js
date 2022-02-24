import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import catalogReducer from './catalogReducer';
import authReducer from "./authReducer";

export const reducers = combineReducers({
    catalog:catalogReducer,
    cart:cartReducer,
    auth:authReducer
})