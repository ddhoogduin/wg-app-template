import SascWebApi from '../../apis/SascWeb'
import {clientManager} from '../../constants/types'


export const unsetRedirect = () =>{
    return{
        type: clientManager.UNSET_REDIRECT
    }
}
