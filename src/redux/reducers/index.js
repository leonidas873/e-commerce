import { combineReducers } from "redux";
import catalogReducer from './catalogReducer';


export const reducers = combineReducers({
    catalog:catalogReducer
})