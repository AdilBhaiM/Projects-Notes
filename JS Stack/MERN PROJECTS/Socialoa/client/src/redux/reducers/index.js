import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthReducer.js";

export const reducers = combineReducers({
  auth: AuthReducer,
});