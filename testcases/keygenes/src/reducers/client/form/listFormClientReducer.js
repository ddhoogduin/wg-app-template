import {form} from '../../../constants/types'

export default (state='', action) => {
    switch (action.type) {
        case form.FORM_LIST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}