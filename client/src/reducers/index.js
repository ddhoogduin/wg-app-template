import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import listFormClientReducer from './client/form/listFormClientReducer'
import loginFormErrorsReducer from './errors/loginFormErrorsReducer'
import authenticationUserReducer from './user/authenticationUserReducer'
import clientReducer from "./client/listClientReducer";
import activeClientReducer from "./client/activeClientReducer";
import activeFormClientReducer from "./client/form/activeFormClientReducer";
import listInputReducer from "./client/input/listInputReducer"
import managerClientReducer from "./client/managerClientReducer";

export default combineReducers({
    form: formReducer,
    loginFormErrors: loginFormErrorsReducer,
    authenticationUser: authenticationUserReducer,
    listClient: clientReducer,
    activeClient: activeClientReducer,
    listFormClient: listFormClientReducer,
    activeFormClient: activeFormClientReducer,
    listInput: listInputReducer
});