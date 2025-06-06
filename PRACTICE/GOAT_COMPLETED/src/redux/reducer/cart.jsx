import { REMOVE_CART, SHOW_CARTS } from "../constant";

const initialState = {
    carts: []
};

export const cartData = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CARTS:
            // console.warn("There in reducer data:", action.payload);
            return { ...initialState, carts: action.payload };
        case REMOVE_CART:
            console.warn("There in reducer data:", action.payload);
            return { ...state, carts: state.carts.filter(e => e.id !== action.payload) };
        default:
            return state;
    }
}