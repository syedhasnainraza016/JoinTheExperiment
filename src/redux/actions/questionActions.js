import { ActionTypes } from "../constants/actions-types";
import * as api from "../../api/index";
import { toast } from "react-toastify";

export const createQuestion = (question) => async (dispatch) => {
  try {
    const { data } = await api.createQuestion(question);
    if (data.status == true) {
      toast.success("Question Created");
    } else if (data.status == false) {
      toast.error("Network Error");
    }
    // dispatch({ type:ActionTypes.CREATE_QUESTION, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.getQuestion();
    // console.log('get-questions',data);
    const questions = data.data;
    // console.log('questions',questions);
    return dispatch({ type: ActionTypes.GET_QUESTION, payload: questions });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateQuestion = (question) => async (dispatch) => {
  try {
    const { data } = await api.updateQuestion(question);
    if (data.status == true) {
      toast.success("Question Updated Successfully");
    } else if (data.status == false) {
      toast.error("Network Error");
    }
    dispatch({ type: ActionTypes.UPDATE_QUESTION, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteQuestion = (id) => async (dispatch) => {
  try {
    let data = await api.deleteQuestion(id);
    if (data.status == true) {
      toast.success("Question Deleted Successfully");
    } else if (data.status == false) {
      toast.error("Network Error");
    }
    dispatch({ type: ActionTypes.DELETE_QUESTION, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAnswers = (id) => async (dispatch) => {
  try {
    const { data } = await api.getAnswer(id);
    // console.log('get-questions',data);
    const answers = data.data;
    // console.log('questionsaaaaaaaaaaaaaaaaaaaa',answers);
    return dispatch({ type: ActionTypes.GET_ANSWERS, payload: answers });
  } catch (error) {
    console.log(error.message);
  }
};
