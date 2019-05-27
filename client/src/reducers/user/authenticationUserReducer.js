import {Authentication} from '../../constants/types'

export default (state='', action) => {
    switch (action.type) {
        case Authentication.LOGIN_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}