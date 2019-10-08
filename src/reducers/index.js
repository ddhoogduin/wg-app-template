import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import configReducer from './configReducer'
import collectionsReducer from "./collectionsReducer";
import protocolStatusReducer from './protocols/protocolStatusReducer'
import applicationReducer from "./applicationReducer";

export default combineReducers({
    form: formReducer,
    protocolStatus: protocolStatusReducer,
    application: applicationReducer,
    config: configReducer,
    collections: collectionsReducer
});