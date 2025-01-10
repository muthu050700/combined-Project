import { createStore } from "redux";
import { CombineReducer } from "../CombineReducer/CombineReducer";

const store = createStore(CombineReducer);

export default store;
