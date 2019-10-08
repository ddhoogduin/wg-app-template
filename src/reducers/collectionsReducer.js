import {collections} from '../constants/types'

export default (state={}, action) => {
    switch (action.type) {
        case collections.ADD_COLLECTION:
            return action.payload;
        default:
            return state;
    }
}