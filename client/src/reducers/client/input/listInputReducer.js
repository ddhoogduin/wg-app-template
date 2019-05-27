import {input} from '../../../constants/types'
import _ from 'lodash'

export default (state=[], action) => {
    switch (action.type) {
        case input.INPUT_LIST_SUCCESS:
            return {...action.payload};
        case input.INPUT_LIST_REMOVE_SUCCESS:
            let newList = {...state};
            delete newList[action.payload];
            return newList;
            break;
        case input.INPUT_LIST_ADD_SUCCESS:
            let item = action.payload;
            item.options = {};
            let index = (_.values(state).length);
            item.id = 'gen-'+index;
            return {...state, [item.id]:item};
        case input.INPUT_OPTION_LIST_ADD:
            newList = {...state};
            index = (_.values(newList[action.payload.id].options).length);
            let id = 'genOption-'+index;
            newList[action.payload.id].options[id] = {
                id: id,
                key: id,
                value: action.payload.value,
                text:action.payload.label}
            return newList;
            break;
        case input.INPUT_OPTION_LIST_REMOVE:
            newList = {...state};
            delete newList[action.payload.id].options[action.payload.index];
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    options: {...newList[action.payload.id].options}
                }
            }
        default:
            return state;
    }
}