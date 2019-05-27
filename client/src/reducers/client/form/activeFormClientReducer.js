import {form} from '../../../constants/types'

export default (state='', action) => {
    switch (action.type) {
        case form.FORM_ITEM_SUCCESS:
            return action.payload;
        case form.FORM_ITEM_FAILED:
            return '';
        default:
            return state;
    }
}