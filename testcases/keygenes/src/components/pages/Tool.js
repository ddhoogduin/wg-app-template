
import React, {Component} from 'react'
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

        switch (input.type) {
            case 'text':
                return (
                    <Field
                        key={`field-input-${key}`}
                        name={input.parameter}
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
                        name={input.parameter}
                        component={fileInput}
                        label={input.label}
                        inputAttr={{
                            placeholder: `Enter the ${input.label.toLowerCase()}`
                        }}
                    />
                )
            case 'select':
                return (
                    <Field
                        key={`field-input-${key}`}
                        name={input.parameter}
                        component={selectInput}
                        validate={[ required ]}
                        label={input.label}
                        inputAttr={{
                            placeholder: `Enter the ${input.label.toLowerCase()}`,
                            options:_.values(input.options)
                        }}
                    />
                )
        }
    }
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
                            Run tool
                        </Header>
                        <p><b>KeyGenes algorithm</b> in order to run the algorithm  enter the dataset and configure the parameters
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