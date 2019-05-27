import SascWebApi from '../../apis/SascWeb'
import {client} from '../../constants/types'

const verifyGetClients = (response) =>{

    if(response.data.length <= 1){
        return {
            type: client.CLIENT_LIST_FAILED
        }
    }
    return {
        type: client.CLIENT_LIST_SUCCESS,
        payload: response.data.items
    }
};

export const getClients = () => async (dispatch) => {
    const response = await SascWebApi.get('/client/list');
    dispatch(verifyGetClients(response));
};
const verifyClientRequest = (response) =>{
    if(response.data.success === false){
        return {
            type: client.CLIENT_DEACTIVATE
        }
    }
    return {
        type: client.CLIENT_ACTIVATE,
        payload: response.data.item
    }
};

export const setActiveClient = (requestedClient) => async (dispatch, getState) =>{

    if(requestedClient !== getState().activeClient.alias){
        const response = await SascWebApi.get(`/client/${requestedClient}`);
        dispatch(verifyClientRequest(response));
    }
}