import { ActionTypes } from '../constants/actions-types';
import * as api from '../../api/index';

export const createTranslation = (translation) => async (dispatch) => {
    try {
      const { data } = await api.createTranslation(translation);

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
     return dispatch({ type:ActionTypes.GET_TRANSLATION, payload:translation  });
    } catch (error) {
      console.log(error.message);
    }
  };




  export const updateTranslation = ( translation) => async (dispatch) => {
    try {
      const { data } = await api.updateTranslation(translation);
     
      dispatch({ type:ActionTypes.UPDATE_TRANSLATION, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
 
  
  export const deleteTranslation = (id) => async (dispatch) => {
    try {
      await api.deleteTranslation(id);
  
      dispatch({ type: ActionTypes.DELETE_TRANSLATION, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };