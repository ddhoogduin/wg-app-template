import React, {Component, PureComponent} from 'react'
import {connect} from "react-redux";
import _ from 'lodash'


import {addInput, getInputList, removeInput, addInputOption, removeInputOption} from '../../../actions/client/inputClientActions'
import {getForm, uploadForm} from '../../../actions/client/formClientActions'
import DetailFormClient from "../../../components/pages/client/form/DetailFormClient";
import {
    getFormValues
} from 'redux-form'

class DetailFormClientContainer extends Component{

    formId = this.props.match.params.formId;

    handleSubmit = (formValues) =>{
        this.props.uploadForm(formValues, this.formId)
    };
    removeInput = (index) =>{
        this.props.removeInput(index)
    };
    generateInputOption = (inputId) =>{
        const formValues = this.props.formValues;
        this.props.addInputOption(
            inputId,
            formValues[`genOptionValue-${inputId}`],
            formValues[`genOptionLabel-${inputId}`])
    };
    removeInputOption = (inputId, index) =>{
        this.props.removeInputOption(inputId, index)
    }
    generateInput = () =>{
        const formValues = this.props.formValues;
        this.props.addInput({
            type:formValues.genType,
            name:formValues.genName,
            label:formValues.genLabel,
            parameter:formValues.genParameter}
        )

    };
    componentWillMount() {
        this.props.getForm(this.formId);
        this.props.getInputList(this.formId);
    }
    render(){
        return (
            <DetailFormClient
                onSubmit={this.handleSubmit}
                client={this.props.client}
                generateInput={this.generateInput}
                listInput={this.props.listInput}
                removeInput={this.removeInput}
                generateInputOption={this.generateInputOption}
                removeInputOption={this.removeInputOption}
                initialValues={ this.props.activeFormClient}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        initialValues: state.activeFormClient,
        client: state.activeClient,
        activeFormClient: state.activeFormClient,
        formValues: getFormValues('detailFormClient')(state),
        listInput: state.listInput
    }
};
export default connect(mapStateToProps, {addInput,
    getForm,
    getInputList,
    uploadForm,
    addInputOption,
    removeInputOption,
    removeInput})(DetailFormClientContainer);
