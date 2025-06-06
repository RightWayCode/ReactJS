// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./slice/calculatorSlice";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    calculatorData: calculatorReducer,
    productData: cartReducer
  },
});


// now we have to understand about props
export default store;
