import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDetails: [],
};

export const formDetailsSlice = createSlice({
  name: "addProductDetails",
  initialState,
  reducers: {
    addRowDetails: (state, action) => {
      state.formDetails = [...state.formDetails, action.payload];
    },
    addFormDetails: (state, action) => {
      state.formDetails = [...action.payload];
    },
  },
});

export const { addRowDetails, addFormDetails } = formDetailsSlice.actions;
export default formDetailsSlice.reducer;
