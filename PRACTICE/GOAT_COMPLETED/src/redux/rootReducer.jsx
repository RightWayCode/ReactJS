import { combineReducers } from "@reduxjs/toolkit";
import { calculateData } from "./reducer/calculation";
import { cartData } from "./reducer/cart";

export default combineReducers({calculateData,cartData})