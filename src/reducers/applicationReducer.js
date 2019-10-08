import {application} from '../constants/types'

export default (state={}, action) => {
    switch (action.type) {
        case application.GET_APPLICATION_DONE:
            return action.payload;
        default:
            return state;
    }
}