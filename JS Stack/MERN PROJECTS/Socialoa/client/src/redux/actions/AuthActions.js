import toast from "react-hot-toast";
import { axiosInstance } from "../../lib/axiosInstance.js";

export const Login = (data) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log(res);
      dispatch({
        type: "LOGIN",
        payload: res.data.user,
      });
    } catch (error) {
      console.log("Login Action Error: ", error);
    }
  };
};

export const Signup = (data) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(res);
      return({
        type: "SIGNUP",
        payload: res.data.user,
      });
    } catch (error) {
      console.log("Signup Action Error: ", error);
      toast.error(error.message)
    }
  };
};

export const Logout = (data) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post("/auth/logout");
      dispatch({
        type: "LOGOUT",
        payload: null,
      });
    } catch (error) {
      console.log("Logout Action Error: ", error);
    }
  };
};

export const setUser = (data) => {
  return {
    type: "SET_USER",
    payload: data,
  };

  
};
