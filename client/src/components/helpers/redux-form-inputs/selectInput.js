import React from 'react'
import {Dropdown, Form, Input} from "semantic-ui-react";

const renderError = ({touched, error}) => {
    if (touched && error) {
        return (
            <div className={'errorMessage'}>{error}</div>
        )
    }
};
export default (input, label, meta, inputAttr) => {
    return (
        <Form.Field>
            <label>{label}</label>
            <Dropdown selection {...input}
                      {...inputAttr}
                      value={input.value}
                      onChange={(param, data) => input.onChange(data.value)}
                      placeholder={label}
            />
            {renderError(meta)}
        </Form.Field>
    )
};

