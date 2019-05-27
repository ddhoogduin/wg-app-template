import {client} from '../../constants/types'

export default (state='', action) => {
    switch (action.type) {
        case client.CLIENT_LIST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}