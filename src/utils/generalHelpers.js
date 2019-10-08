import _ from "lodash";
import {moduleError} from '../constants/errorTypes'

export const getOnlyPublished = (data) =>{

    return _.values(_.filter(
        data, function(item){ return item.status === 'published' || item.published === 'published' })
    );
};

export const validateAttributes = (obj, required_attributes) =>{
    return (required_attributes.every(key => Object.keys(obj).includes(key)))
};

export const validateReferenceAlias = (key, obj)=>{
    return obj.hasOwnProperty(key)
};

export class throwError{
    static config = (message) =>{
        console.error( `Configuration error -  ${message}`);
    };
    static module = (message) =>{
        console.error( `Module error -  ${message}`);
    };
    static moduleAttr = (module, attrs) =>{
        console.error( `Module error -  ${module} ${moduleError.INVALID_MODULE_ATTRS}: ${attrs}`);
    };
}