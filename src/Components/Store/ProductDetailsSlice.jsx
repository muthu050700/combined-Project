import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...action.payload];
    },
  },
});

export const { addProduct } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
