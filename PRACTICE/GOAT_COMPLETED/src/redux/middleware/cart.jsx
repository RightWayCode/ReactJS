import { put, takeEvery } from "redux-saga/effects";
import { GET_CARTS, SHOW_CARTS } from "../constant";

export function* fetched(action) {
    const limit = action.payload || 5;
    const cart = yield fetch(`http://localhost:3000/cloths?_limit=${limit}`);
    const cartJSON = yield cart.json();
    console.warn("There is a data: ",cartJSON);
    yield put({ type: SHOW_CARTS, payload: cartJSON });
}

export function* fetchedData() {
    yield takeEvery(GET_CARTS, fetched);
}