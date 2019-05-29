import SascWebApi from "../../apis/SascWeb";


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
    return verifyGetList(response, success, error);
};