import { combineReducers } from "redux";
import { login, register,addQuestion, addTranslation} from "./userReduser";
const reducers = combineReducers({
    login,
    register,
    addQuestion,
    addTranslation

});
export default reducers;