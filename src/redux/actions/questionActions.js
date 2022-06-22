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