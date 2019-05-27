import {form, clientManager} from "../../constants/types";

export default (state={}, action) => {
    switch (action.type) {
        case form.FORM_ITEM_EDIT_SUCCESS:
            return {
                message: action.payload.message,
                direction: action.payload.redirect
            };
        case clientManager.UNSET_REDIRECT:
            return {}
        default:
            return {}
    }
}