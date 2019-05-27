import {input} from '../../../constants/types'
import _ from 'lodash'
export default (state=[], action) => {
    switch (action.type) {
        case input.INPUT_LIST_SUCCESS:
            return action.payload;
        case input.INPUT_LIST_REMOVE_SUCCESS:
            let values = _.values(state)
            values.splice(action.payload, 1)
            return [...values]
        case input.INPUT_LIST_ADD_SUCCESS:
            return [...state, action.payload];
        default:
            return state;
    }
}