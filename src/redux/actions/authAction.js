import { ActionTypes } from '../constants/actions-types';
import * as api from '../../api/index';

export const login = (userData) => async (dispatch) => {
    try {
      const { data } = await api.createUser(userData);
      
      const user = data?.data;
      dispatch({ type:ActionTypes.LOGIN, payload: user });
      return user
    } catch (error) {
      console.log(error.message);
    }
  };

  export const signup = (userData) => async (dispatch) => {
    try {
      const { data } = await api.registerUser(userData);
  
      dispatch({ type:ActionTypes.SIGNUP, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };