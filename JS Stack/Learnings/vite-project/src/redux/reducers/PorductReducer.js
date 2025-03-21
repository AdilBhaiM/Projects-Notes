import { actionType } from "../constants/action.type.js";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_PRODUCTS:
      return {...state, products: payload};
    default:
      return state;
  }
};