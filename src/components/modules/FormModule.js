import React, {Component} from 'react'
import {Button, Form, Grid, Icon, Segment, Transition} from "semantic-ui-react";
import {Field, reduxForm, reset} from "redux-form";
import {required} from "../../constants/formValidationRules";
import {fileInput, selectInput, textInput} from "../helpers/redux-form-inputs";
import {throwError, validateAttributes} from "../../utils/generalHelpers";

class FormModule extends Component{

    onSubmit = (formValues, dispatch) =>{
        this.props.onSubmit(
            this.props.collection['form'][0],
            formValues
        );
        dispatch(reset('mainForm'));
    };
    renderForm(){
        if(this.props.collection['inputs'].length < 1){
            return <b><i>Form under construction!</i></b>
        }else{
            return (
                <div>
                    {this.renderInputs()}
                    <Button type={'submit'} icon labelPosition='left' size='large'  floated='right'>
                        <Icon name='paper plane' />
                        Run!
                    </Button>
                </div>
            )
        }
    }
    renderInputType = (input, key) => {
        switch (input.input_type.type) {
            case 'text':
                return (
                    <Field
                        key={`field-input-${key}`}
                        name={input.api_reference_parameter}
                        component={textInput}
                        validate={[ required ]}
                        label={input.label}
                        inputAttr={{
                            placeholder: `Enter the ${input.label.toLowerCase()}`,
                            type:'text',
                        }}
                    />
                );
            case 'file':
                return (
                    <Field
                        key={`field-input-${key}`}
                        name={input.api_reference_parameter}
                        component={fileInput}
                        label={input.label}
                        inputAttr={{
                            placeholder: `Enter the ${input.label.toLowerCase()}`
                        }}
                    />
                );
            case 'select':
                const options = this.createOptions(key, input.option_titles, input.option_values);
                return (
                    <Field
                        key={`field-input-${key}`}
                        name={input.api_reference_parameter}
                        component={selectInput}
                        validate={[ required ]}
                        label={input.label}
                        inputAttr={{
                            placeholder: `Enter the ${input.label.toLowerCase()}`,
                            options: options}

                        }
                    />
                );
            default:
                return null

        }
    };
    createOptions = (index, titles, values) => {
        const options = [];
        titles.forEach(
            (title, key) =>{
                options.push({
                    'key': `optionItem-${index}-${key}`,
                    'text': titles[key],
                    'value': values[key]
                })
            }
        );
        return options
    };
    renderInputs(){
        return this.props.collection['inputs'].map(
            (input, key) => this.renderInputType(input, key)
        )
    }

    render() {
        if(!this.props.collection['inputs']){
            return null
        }
        let module = 'form:form';
        let required_attributes = ['title', 'api', 'tool_reference', 'description'];
        if (!validateAttributes(this.props.collection['form'][0], required_attributes)){
            throwError.moduleAttr(module, required_attributes);return null}
        module = 'form:inputs';
        required_attributes = ['api_reference_parameter', 'label', 'input_type'];
        if (!validateAttributes(this.props.collection['inputs'][0], required_attributes)){
            throwError.moduleAttr(module, required_attributes);return null}
        return(
                <Grid.Row>
                    <Grid.Column>
                        {(this.props.protocolStatus)?(
                            <Transition
                                transitionOnMount={true}
                                animation={"slide down"}
                                duration={{ show:1000 }}
                            >
                                <Segment color={'green'}>
                                    <b>Algorithm executed!</b> Dataset will be in your mail when ready
                                </Segment>
                            </Transition>
                        ):''
                        }
                        <h3>Configuration</h3>
                        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            {this.renderForm()}
                        </Form>
                    </Grid.Column>
                </Grid.Row>
        )
    }

}
export default reduxForm({
    form:'mainForm',
    enableReinitialize : true
})(FormModule)