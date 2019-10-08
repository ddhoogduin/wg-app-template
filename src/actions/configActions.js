import SascWebApi from "../apis/SascWeb";
import {getOnlyPublished} from '../utils/generalHelpers'
import {application, config} from '../constants/types'


export const getConfig = () => async (dispatch) =>{
    const result = await SascWebApi.get('items/config');
    const publishedConfig = getOnlyPublished(result.data.data);
    dispatch({type: config.SET_CONFIG, payload: publishedConfig})
};

export const getApplication = () => async (dispatch) =>{
    const result = await SascWebApi.get('items/application');
    const publishedConfig = getOnlyPublished(result.data.data);
    dispatch({type: application.GET_APPLICATION_DONE, payload: publishedConfig})
};