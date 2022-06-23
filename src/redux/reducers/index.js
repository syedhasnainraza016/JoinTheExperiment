import { combineReducers } from "redux";
import { login, register,addQuestion, addTranslation,getAnswers} from "./userReduser";
const reducers = combineReducers({
    login,
    register,
    addQuestion,
    addTranslation,
    getAnswers

});
export default reducers;