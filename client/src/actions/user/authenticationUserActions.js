import SascWebApi from '../../apis/SascWeb'
import {Authentication} from '../../constants/types'

const verifyLogin = (response) => {
    if(response.data.success){
        return {
            type: Authentication.LOGIN_SUCCESS,
            payload: response.data.id
        }
    }else{
        return {
            type: Authentication.LOGIN_FAILED,
            payload: response.data.error
        }
    }
};
export const userLogin = formValues => async (dispatch, getState) => {
    const response = await SascWebApi.post('/auth/login', formValues);
    dispatch(verifyLogin(response));
};
