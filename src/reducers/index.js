import { combineReducers } from "redux";
import authReducer from './authReducer';
import problemReducer from './problemReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    problem : problemReducer
})


export default rootReducer;