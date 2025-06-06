import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    carts: []
}
// it will work, no worry!
// export const fetchedProducts = createAsyncThunk("", async () => {
//     const products = await fetch("http://localhost:3000/cloths?_limit=5");
//     const product_json = await products.json()
//     return product_json;
// })
// export const fetchedProducts = createAsyncThunk("carts/showCarts", async (limit) => {
//     const products = await fetch(`http://localhost:3000/cloths?_limit=${limit}`);
//     const product_json = await products.json()
//     return product_json;
// })

export const fetchedProducts = createAsyncThunk("carts/showCarts",
    async (limit) => {
        try {
            const response = await fetch(`http://localhost:3000/cloths?_limit=${limit}`);
            if (!response.ok) throw new Error("Failed to fetch products");
            const data = await response.json();
            return data;
        } catch (err) {
            // return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const cartsSlice = createSlice({
    name: "carts",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchedProducts.fulfilled, (state, action) => {
            state.carts = action.payload;
        })
    }
})

// export const { showCarts } = cartsSlice.actions;
export default cartsSlice.reducer;