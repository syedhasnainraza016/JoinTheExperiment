import { ActionTypes } from "../constants/actions-types";
const intialState = {
  questions: [],
  user: [],
  translation: [],
  answers: [],
};

export const login = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export const register = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGNUP:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export const addQuestion = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CREATE_QUESTION:
      return { ...state, questions: [...state.questions, payload] };
    case ActionTypes.GET_QUESTION:
      return { ...state, questions: payload };
    case ActionTypes.GET_QUESTION_BYID:
      return { ...state, questions: payload };
    case ActionTypes.UPDATE_QUESTION:
      return state.map((item) => (item._id === payload._id ? payload : item));
    case ActionTypes.DELETE_QUESTION:
      return state.filter((item) => item._id !== payload);
    default:
      return state;
  }
};

export const addTranslation = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CREATE_TRANSLATION:
      return { ...state, translation: [...state.translation, payload] };
    case ActionTypes.GET_TRANSLATION:
      return { ...state, translation: payload };
    case ActionTypes.UPDATE_TRANSLATION:
      return state.map((item) => (item._id === payload._id ? payload : item));
    case ActionTypes.DELETE_TRANSLATION:
      return state.filter((item) => item._id !== payload);
    default:
      return state;
  }
};

export const getAnswers = (state = intialState, { type, payload }) => {
  console.log(type, "type", payload, "anser data");

  switch (type) {
    case ActionTypes.CREATE_ANSWER:
      return { ...state, answers: [...state.questions, payload] };
    case ActionTypes.GET_ANSWERS:
      return { ...state, answers: payload };
    case ActionTypes.Rating_ANSWER:
      return { ...state, answers: payload };

    default:
      return state;
  }
};
