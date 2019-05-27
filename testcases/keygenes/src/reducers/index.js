import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import listInputReducer from "./client/input/listInputReducer"
import activeFormClientReducer from "./client/form/activeFormClientReducer";
import protocolStatusReducer from "./protocolStatusReducer";


export default combineReducers({
    form: formReducer,
    listInput: listInputReducer,
    activeFormClient: activeFormClientReducer,
    protocolStatus:protocolStatusReducer
});