import { authActionTypes } from "../constants/Auth.ActionTypes";

const initialState = {
  authUser: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      return {
        ...state,
        authUser: action.payload,
      };
    case authActionTypes.SIGNUP:
      return {
        ...state,
        authUser: action.payload,
      };
    case authActionTypes.VERIFY_EMAIL:
      return {
        ...state,
        authUser: action.payload,
      };
    case authActionTypes.LOGOUT:
      return {
        ...state,
        authUser: null,
      };
    case authActionTypes.RESET_PASSWORD:
      return {
        ...state,
        authUser: null,
      };
    case authActionTypes.SET_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    default:
      return state;
  }
};
