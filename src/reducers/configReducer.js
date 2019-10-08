import {config} from '../constants/types'

export default (state={}, action) => {
    switch (action.type) {
        case config.SET_CONFIG:
            return action.payload;
        default:
            return state;
    }
}