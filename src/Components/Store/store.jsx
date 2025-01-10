import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductDetailsSlice";
import formDetailsReducer from "./EditFormDetails";

export const store = configureStore({
  reducer: {
    product: productReducer,
    formDetails: formDetailsReducer,
  },
});
