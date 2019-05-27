import {client} from '../../constants/types'

export default (state='', action) => {
    switch (action.type) {
        case client.CLIENT_ACTIVATE:
            return action.payload;
        case client.CLIENT_DEACTIVATE:
            return '';
        default:
            return state;
    }
}