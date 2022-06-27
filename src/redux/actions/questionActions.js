import { ActionTypes } from '../constants/actions-types';
import * as api from '../../api/index';

export const createQuestion = (question) => async (dispatch) => {
    try {
      const { data } = await api.createQuestion(question);

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
     return dispatch({ type:ActionTypes.GET_QUESTION, payload:questions  });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getQuestionById = (id) => async (dispatch) => {
    try {
      const { data } = await api.getQuestionById(id);
      // console.log('get-questions',data);
      const question = data.data;
      // console.log('questions',questions);
     return dispatch({ type:ActionTypes.GET_QUESTION_BYID, payload:question });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateQuestion = ( question) => async (dispatch) => {
    try {
      const { data } = await api.updateQuestion(question);
     
      dispatch({ type:ActionTypes.UPDATE_QUESTION, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
 
  
  export const deleteQuestion = (id) => async (dispatch) => {
    try {
      await api.deleteQuestion(id);
  
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
      console.log('questions',answers);
     return dispatch({ type:ActionTypes.GET_ANSWERS, payload:answers  });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const createAnswer = (answer) => async (dispatch) => {
    try {
      const { data } = await api.createAnswer(answer);

      // dispatch({ type:ActionTypes.CREATE_QUESTION, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const rateAnswer = (answer) => async (dispatch) => {
    try {
      const { data } = await api.rateAnswer(answer);

      // dispatch({ type:ActionTypes.CREATE_QUESTION, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };