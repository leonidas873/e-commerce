import { SET_CART_PRODUCTS, DELETE_CART_PRODUCT } from "../actionTypes/actionTypes"

export const setCart = (products) => {
    return {
        type: SET_CART_PRODUCTS,
        payload: products
    }
}

export const setUpdatedCart = (products) => {
    return {
        type: DELETE_CART_PRODUCT,
        payload: products
    }
}
