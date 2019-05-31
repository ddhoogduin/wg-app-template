import SascWebApi from "../../apis/SascWeb";
import _ from 'lodash'

const verifyGetList = (response, success, error) =>{
    if(response.data.success === false){
        return {
            type: error
        }
    }
    return {
        type: success,
        payload: response.data.items
    }
};
export const getList = (entity, success, error) => async (dispatch, getState) =>{
    const response = await SascWebApi.get(`/${entity}/${getState().activeClient.alias}/list`);
    dispatch(verifyGetList(response, success, error));
};

export const putPublishedList = (entity, selection, value, pk, success, error ) =>{
    const data = _.keys(_.pickBy(selection)).map(
        (id) =>{
            return {[pk]: id, published: value}
        }
    );
    return putList( entity, data, success, error)
};

const verifyTogglePublishList = (response, success, error) =>{
    if(response.data.success === false){
        return {type: error}
    }
    return {type: success, payload: response.data.items}
}
export const putList =  (entity, data, success, error) => async (dispatch, getState) =>{
    const response = await SascWebApi.put(`/${entity}/${getState().activeClient.alias}/list`,
        {data});
    return dispatch(verifyTogglePublishList(response, success, error));
};

const verifyDeleteList = (response, success, error) => {
    if(response.data.success === false){
        return {type: error}
    }
    return {type: success}
}
export const deleteList =  (entity, ids, success, error) => async (dispatch, getState) =>{
    const response = await SascWebApi.delete(`/${entity}/${getState().activeClient.alias}/list`,data:});
    return dispatch(verifyTogglePublishList(response, success, error));
};
