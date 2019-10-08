import SascWebApi from "../apis/SascWeb";
import {getOnlyPublished} from '../utils/generalHelpers'
import {collections} from '../constants/types'


export const getCollections = (rawCollections) => (dispatch) =>{
    let count = 0;
    let collectionData = {};
    rawCollections.forEach( async (item) => {
        const result = await SascWebApi.get('items/'+item+'?fields=*.*.*');
        collectionData[item] = getOnlyPublished(result.data.data);
        count++;
        if(count === rawCollections.length){
            dispatch({type: collections.ADD_COLLECTION, payload:collectionData})
        }
    });

};



