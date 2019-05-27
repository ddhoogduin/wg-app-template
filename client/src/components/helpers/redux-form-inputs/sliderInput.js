import React from 'react'
import {Checkbox, Form} from "semantic-ui-react";

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
            <Checkbox slider {...input}  {...inputAttr}  value={0} />
            {renderError(meta)}
        </Form.Field>
    )
};

