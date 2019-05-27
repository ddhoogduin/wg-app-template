import SascWebApi from '../../apis/SascWeb'
import {form} from '../../constants/types'


const verifyGetFormList = (response) =>{
    if(response.data.success === false){
        return {
            type: form.FORM_LIST_FAILED
        }
    }
    return {
        type: form.FORM_LIST_SUCCESS,
        payload: response.data.items
    }
};

export const getFormList = () => async (dispatch, getState) =>{
        const response = await SascWebApi.get(`/form/${getState().activeClient.alias}/list`);
        dispatch(verifyGetFormList(response));
}

const verifyGetForm = (response) =>{
    if(response.data.success === false){
        return {
            type: form.FORM_ITEM_FAILED
        }
    }
    return {
        type: form.FORM_ITEM_SUCCESS,
        payload: response.data.item
    }
};

export const getForm = (id) => async (dispatch, getState) =>{
    const response = await SascWebApi.get(`/form/${getState().activeClient.alias}/${id}`);
    dispatch(verifyGetForm(response));
}

const verifyUploadForm = (response) =>{
    if(response.data.success === false){
        return {
            type: form.FORM_ITEM_EDIT_FAILED
        }
    }
    return {
        type: form.FORM_ITEM_EDIT_SUCCESS,
        payload:{
            redirect: 'forms',
            message: "Form edited correctly "
        }
    }
};

export const uploadForm = (formValues, id) => async (dispatch, getState) =>{
    const response = await SascWebApi.put(`/form/${getState().activeClient.alias}/${id}`,
        {formData: formValues, inputData: getState().listInput});
    dispatch(verifyUploadForm(response));
}