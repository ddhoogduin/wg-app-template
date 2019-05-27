import React, {Component} from 'react'
import {
    Button,
    Icon,
    Table,
    Checkbox, Form, Tab, Dropdown, Popup
} from 'semantic-ui-react'

import ComponentFrame from "../../../modules/ComponentFrame";
import {Field, reduxForm, change} from "redux-form";
import {textInput, sliderInput, selectInput} from "../../../helpers/redux-form-inputs";
import { required} from "../../../../constants/formValidationRules";
import _ from 'lodash'

class DetailFormClient extends Component{

    panes = [
        { menuItem: 'Form', render: () => <Tab.Pane key={'detailFormCLient-tab1'}>{this.mainForm()}</Tab.Pane>},
        { menuItem: 'Inputs', render: () => <Tab.Pane key={'detailFormCLient-tab2'}>{this.inputsForm()}</Tab.Pane>},
        { menuItem: 'Config', render: () => <Tab.Pane key={'detailFormCLient-tab3'}>test</Tab.Pane>},
    ]

    options = [
        { key: 't', text: 'Text', value: 'text' },
        { key: 'f', text: 'File', value: 'file' },
        { key: 's', text: 'Select', value: 'select' },
    ]


    // render form overview
    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues)
    };
    generateInputOption = (id) =>{
        this.props.generateInputOption(id);
        this.props.dispatch(change('detailFormClient', `genOptionValue-${id}`, ''));
        this.props.dispatch(change('detailFormClient', `genOptionLabel-${id}`, ''));
    };
    removeInputOption = (id, index) =>{
        this.props.removeInputOption(id, index);
    };
    mainForm(){
        return(
            <div>
                <Field
                    name={'name'}
                    component={textInput}
                    validate={[ required ]}
                    label={'Name of form'}
                    inputAttr={{
                        placeholder:'Name form',
                        type:'text',
                    }}
                />
                <Field
                    name={'tool_name'}
                    component={textInput}
                    validate={[ required ]}
                    label={'Tool reference in API'}
                    inputAttr={{
                        placeholder:'Tool reference',
                        type:'text',
                    }}
                />
                <Field
                    name={'published'}
                    component={sliderInput}
                    label={'Publish form in client'}
                />
            </div>
        )
    }
    renderInputOptionList = (options, keyId) =>{
        return (
            <Table padded celled size='small' style={{'minWidth': 400}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={3}>Label</Table.HeaderCell>
                        <Table.HeaderCell width={3}>Value</Table.HeaderCell>
                        <Table.HeaderCell width={1}> </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
            {_.values(options).map(
            (item, key) =>(
                <Table.Row key={`optionInput-${keyId}-${key}`}>
                    <Table.Cell>{item.text}</Table.Cell>
                    <Table.Cell>{item.value}</Table.Cell>
                    <Table.Cell
                        textAlign={'center'}>
                        <Button
                            color='red'
                            icon={'minus'}
                            onClick={()=>this.removeInputOption(keyId, item.id)}/>
                    </Table.Cell>
                </Table.Row>
            )
        )}
                </Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Field
                                name={`genOptionLabel-${keyId}`}
                                component={textInput}
                                inputAttr={{
                                    fluid:true,
                                    placeholder:'Text',
                                    type:'text'
                                }}
                            />
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            <Field
                            name={`genOptionValue-${keyId}`}
                            component={textInput}
                            inputAttr={{
                                fluid:true,
                                placeholder:'Value',
                                type:'text'
                            }}
                        /></Table.HeaderCell>
                        <Table.HeaderCell  textAlign={'center'}><Button  color='green' icon={'plus'}
                         onClick={()=>this.generateInputOption(keyId)}/></Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
    renderInputOptions = (options, keyId) =>{
        return (
            <Popup
                key={`inputOption-${keyId}`}
                position='bottom center'
                trigger={
                    <Button type='button' color='blue' icon='caret down' content={`Add options (${_.values(options).length}) `} />
                }
                on='click'
                wide='very'
            >
                {this.renderInputOptionList(options, keyId)}
            </Popup>
        )
    }
    renderInputList = () =>{

        if(_.values(this.props.listInput) < 1)
            return (
                <Table.Row>
                    <Table.Cell colSpan={6} textAlign="center"><b><i>No inputs yet</i></b></Table.Cell>
                </Table.Row>
            )
        return _.values(this.props.listInput).map(
            (item, key) => (
                <Table.Row key={`formTableDetail-content-${key}`}>
                    <Table.Cell>{item.type}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.label}</Table.Cell>
                    <Table.Cell>{item.parameter}</Table.Cell>
                    <Table.Cell>{(item.type === 'select')?this.renderInputOptions(item.options, item.id):'-'}</Table.Cell>
                    <Table.Cell>
                        <Icon bordered inverted color='red' name='trash' onClick={() => this.props.removeInput(item.id)} />
                        <Icon bordered inverted color='yellow' name='edit' />
                    </Table.Cell>
                </Table.Row>
            )
        )
    }
    generateInput = () =>{
        this.props.generateInput()
        this.props.dispatch(change('detailFormClient', 'genType', ''));
        this.props.dispatch(change('detailFormClient', 'genName', ''));
        this.props.dispatch(change('detailFormClient', 'genLabel', ''));
        this.props.dispatch(change('detailFormClient', 'genParameter', ''));
    };
    inputsForm(){
        return(
            <div>
                <Form.Group widths='equal'>
                    <Field
                        name={'genType'}
                        component={selectInput}
                        label={'Input type'}
                        inputAttr={{
                            fluid:true,
                            placeholder:'Input type',
                            options:this.options
                        }}
                    />
                    <Field
                        name={'genName'}
                        component={textInput}
                        label={'Name'}
                        inputAttr={{
                            fluid:true,
                            placeholder:'Name',
                            type:'text',
                        }}
                    />
                    <Field
                        name={'genLabel'}
                        component={textInput}
                        label={'Label'}
                        inputAttr={{
                            fluid:true,
                            placeholder:'Label',
                            type:'text'
                        }}
                    />
                    <Field
                        name={'genParameter'}
                        component={textInput}
                        label={'Parameter reference'}
                        inputAttr={{
                            fluid:true,
                            placeholder:'Parameter reference',
                            type:'text'
                        }}
                    />
                    <Button color={'green'} type='button' onClick={() => this.generateInput()}>Generate</Button>
                </Form.Group>
                <Table widths='equal'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Label</Table.HeaderCell>
                            <Table.HeaderCell>Parameter</Table.HeaderCell>
                            <Table.HeaderCell>Options</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderInputList()}
                    </Table.Body>
                </Table>
        </div>
        )
    }
    render() {
        return(
            <ComponentFrame
                name={'Edit forms'}
                description={'Edit a client form'}
                breadCrumb={`${this.props.client.name} / Forms / Edit form`}
            >
                <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Tab panes={this.panes} />
                <Button type='submit' disabled={this.props.submitting} fluid>Save</Button>
                </Form>
            </ComponentFrame>
        )
    }
}

export default reduxForm({
    form:'detailFormClient',
    enableReinitialize : true
})(DetailFormClient)
