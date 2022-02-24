import { SET_CATALOG, SET_ACTIVE_CATEGORY } from "../actionTypes/actionTypes"

export const setCatalog = (products) =>{
    return {
        type:SET_CATALOG,
        payload:products
    }
}

export const setActiveCategory = (categoryName) =>{
    return {
        type:SET_ACTIVE_CATEGORY,
        payload:categoryName
    }
}

