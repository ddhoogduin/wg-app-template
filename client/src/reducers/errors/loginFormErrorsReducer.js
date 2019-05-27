import {Authentication} from '../../constants/types'

export default (state='', action) => {
    switch (action.type) {
        case Authentication.LOGIN_FAILED:
            return action.payload;
        case Authentication.LOGIN_SUCCESS:
            return  '';
        default:
            return state
    }
}