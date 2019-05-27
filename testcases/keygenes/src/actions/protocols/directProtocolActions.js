import axios from "axios";
import SascWebApi from "../../apis/SascWeb";

import {protocol} from '../../constants/types'

export const excApi = (data) => async (dispatch, getState) => {
    let bodyFormData = new FormData();
    bodyFormData.set('email', data.email);
    bodyFormData.set('training', data.training);
    bodyFormData.append('file', data.file[0]);
    await axios({
        method: 'post',
        url: getState().activeFormClient.tool_name,
        data: bodyFormData,
        config: { headers: {'Content-Type': 'multipart/form-data',  'Accept': 'text/html' }}
    })
    dispatch({
        type:protocol.PROTOCOL_COMPLETED
    });
}