import { GET_CARTS, REMOVE_CART } from "../constant";

export const getCarts = (limit = 5) => {
    return {
        type: GET_CARTS,
        payload: limit
    }
}

export const removeCart = (id) => {
    return {
        type: REMOVE_CART,
        payload: id
    }
}