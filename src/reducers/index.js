import { combineReducers } from "redux";
import authReducer from './authReducer';
import problemReducer from './problemReducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    problem : problemReducer
})


export default rootReducer;