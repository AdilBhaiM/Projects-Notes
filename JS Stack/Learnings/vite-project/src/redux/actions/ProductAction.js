import {actionType} from "../constants/action.type.js";

export const setProduct = (product) => {
  return {
    type: actionType.SET_PRODUCTS,
    payload: product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionType.SELECTED_PRODUCT,
    payload: product
  };
};
