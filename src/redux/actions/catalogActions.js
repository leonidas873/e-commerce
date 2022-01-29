import { SET_CATALOG } from "../actionTypes/actionTypes"

export const setCatalog = (products) =>{
    return {
        type:SET_CATALOG,
        payload:products
    }
}
