import {form, input} from "../../constants/types";
import SascWebApi from "../../apis/SascWeb";

import _ from 'lodash'

export const addInput = (item) => {
    return {
        type: input.INPUT_LIST_ADD_SUCCESS,
        payload: item
    }
}
export const removeInput = (index) => {
    return {
        type: input.INPUT_LIST_REMOVE_SUCCESS,
        payload: index
    }
}
const verifyGetInputList = (response) =>{
    if(response.data.success === false){
        return {
            type: input.INPUT_LIST_FAILED
        }
    }
    return {
        type: input.INPUT_LIST_SUCCESS,
        payload: _.values(response.data.items)
    }
};

export const getInputList = (formId) => async (dispatch, getState) =>{
    const response = await SascWebApi.get(`/input/keygenes/8/list`);
    dispatch(verifyGetInputList(response));
}