// src/redux/slice/calculatorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.result += Number(action.payload); // Adding the value
    },
    clear: (state) => {
      state.result = 0;
    },
    total: (state, action) => {
      state.result = action.payload; // You can modify this logic as needed
    },
  },
});

export const { addValue, clear, total } = calculatorSlice.actions;

export default calculatorSlice.reducer;
