import axios from 'axios';

const url = 'http://192.168.100.52:4000/api';


export const createUser = (data) => axios.post(`${url}/auth/login`, data);
export const registerUser = (data) => axios.post(`${url}/register`, data);
export const createQuestion = (data) => axios.post(`${url}/question/add-question`, data);
export const getQuestion = () => axios.get(`${url}/question/get-questions`);
export const updateQuestion = (data) => axios.post(`${url}/question/edit-question`,data);
export const deleteQuestion = (id) => axios.delete(`${url}/question/del-question/${id}`);
export const getQuestionById = (id) => axios.get(`${url}/question/questionById/${id}`);
export const createTranslation = (data) => axios.post(`${url}/translation/add-translation`, data);
export const getTranslation = () => axios.get(`${url}/translation/get-translations`);
export const updateTranslation = (data) => axios.post(`${url}/translation/edit-translation`,data);
export const deleteTranslation = (id) => axios.delete(`${url}/translation/del-translation/${id}`);

export const getAnswer = (questionId) => axios.get(`${url}/answer/view-answers/${questionId}`);
export const createAnswer = (data) => axios.post(`${url}/answer/add-answer`, data);

