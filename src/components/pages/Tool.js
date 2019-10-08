
import React, {Component} from 'react'
import Parser from 'html-react-parser';
import {Button, Checkbox, Container, Form, Grid, Header, Icon, Segment, Transition} from "semantic-ui-react";
import _ from "lodash";
import {Field, reduxForm} from "redux-form";
import {required} from "../../constants/formValidationRules";
import {fileInput, selectInput, textInput} from "../helpers/redux-form-inputs";

class Tool extends Component{
    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues)
    };
    renderForm(){
        if(this.props.inputList.length < 1){
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
                )
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
                )
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
                )
        }
    }
    createOptions = (index, titles, values) => {
        const options = [];
        titles.map(
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
        return this.props.inputList.map(
            (input, key) => this.renderInputType(input, key)
        )
    }
    render() {
        return(
            <Grid>
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
                        <Header as='h1' dividing>
                            {this.props.content['tool'].title}
                        </Header>
                        <p>
                            {Parser(this.props.content['tool'].content)}
                        </p>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h3>Configuration</h3>
                        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        {this.renderForm()}
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}
export default reduxForm({
    form:'mainForm',
    enableReinitialize : true
})(Tool)