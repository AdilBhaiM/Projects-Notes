import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./PorductReducer.js";

export const reducers = combineReducers({
  AllProduct: productReducer,
});
