import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { fetchedData } from "./middleware/cart";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(fetchedData);