import { SET_CATALOG, SET_SEARCH_QUERY } from "../actionTypes/actionTypes";

const initialState = {
    catalog:[],
    
}

const catalogReducer = (state=initialState,{type,payload}) =>{
switch(type){
    case SET_CATALOG:
        return {
            ...state,
            catalog:payload
        }  
    default:
        return {
            ...state
        }
}
}

export default catalogReducer;