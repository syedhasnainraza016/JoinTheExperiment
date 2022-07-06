import { ActionTypes } from "../constants/actions-types";
import * as api from "../../api/index";
import { toast } from "react-toastify";

export const login = (userData) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userData);
    console.log("data", data);
    if (data.status == true) {
      toast.success("Login Success");
    } else if (data.status == false) {
      toast.error("Invalid Email or Password");
    }
    const user = data?.data;
    dispatch({ type: ActionTypes.LOGIN, payload: user });
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(userData);

    dispatch({ type: ActionTypes.SIGNUP, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
