import { ActionTypes } from "../constants/actions-types";
import * as api from "../../api/index";
import { toast } from "react-toastify";

export const createTranslation = (translation) => async (dispatch) => {
  try {
    const { data } = await api.createTranslation(translation);
    if (data.status == true) {
      toast.success("Translation Created");
    } else if (data.status == false) {
      toast.error("Network Error");
    }
    //   dispatch({ type:ActionTypes.CREATE_TRANSLATION, payload: data?.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTranslation = () => async (dispatch) => {
  try {
    const { data } = await api.getTranslation();
    // console.log('get-questions',data);
    const translation = data.data;
    // console.log('questions',questions);
    return dispatch({
      type: ActionTypes.GET_TRANSLATION,
      payload: translation,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTranslation = (translation) => async (dispatch) => {
  try {
    const { data } = await api.updateTranslation(translation);
    if (data.status == true) {
      toast.success("Translation Updated Successfully");
    } else if (data.status == false) {
      toast.error("Network Error");
    }
    dispatch({ type: ActionTypes.UPDATE_TRANSLATION, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTranslation = (id) => async (dispatch) => {
  try {
    let data = await api.deleteTranslation(id);
    if (data.status == true) {
      toast.success("Translation Deleted Successfully");
    } else if (data.status == false) {
      toast.error("Network Error");
    }
    dispatch({ type: ActionTypes.DELETE_TRANSLATION, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
