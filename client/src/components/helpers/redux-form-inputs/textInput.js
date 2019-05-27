import React from 'react'
import {Form, Input} from "semantic-ui-react";

const renderError = ({touched, error}) =>{
    if(touched && error){
        return(
            <div className={'errorMessage'}>{error}</div>
        )
    }
};
export default (input, label, meta, inputAttr) =>{
    return(
        <Form.Field>
            <label>{label}</label>
            <Input {...input}  {...inputAttr} autoComplete='off' />
            {renderError(meta)}
        </Form.Field>
    )
};

