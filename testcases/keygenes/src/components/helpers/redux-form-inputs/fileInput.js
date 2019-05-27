import React from 'react'
import {Form, Input} from "semantic-ui-react";

const renderError = ({touched, error}) =>{
    if(touched && error){
        return(
            <div className={'errorMessage'}>{error}</div>
        )
    }
};

export default  ({ input: {value: omitValue, ...inputProps }, meta: omitMeta, ...props }) =>{
    return(
        <Form.Field>
            <label>{props.label}</label>
            <Input
                type={'file'}
                {...inputProps}
                {...props.input}
                autoComplete='off' />
            {renderError(omitMeta)}
        </Form.Field>
    )
};
