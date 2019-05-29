import React, {Component} from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash'
import OverviewClient from '../../components/pages/client/overview/OverviewClient'
import {overview} from "../../constants/types";

import {setActiveOverview} from '../../actions/client/overviewClientActions'
import {connect} from "react-redux";

class OverviewClientContainer extends Component{

    client;
    pk;
    entity;
    tableHeaders;
    addItem = () => {this.throwMethodImplementationError()};
    publishItem = () => {this.throwMethodImplementationError()};
    publishSelection = () => {this.throwMethodImplementationError()};
    unpublishSelection = () => {this.throwMethodImplementationError()};
    deleteSelection = () => {this.throwMethodImplementationError()};
    dataActions = {
        [overview.OVERVIEW_ADD]:{color:'green', action: this.addItem, text:'Add new', icon:'clipboard'},
        [overview.OVERVIEW_PUBLISH]:{color:'blue', action: this.publishSelection, text:'Publish', icon:'eye'},
        [overview.OVERVIEW_UNPUBLISH]:{color:'yellow', action: this.unpublishSelection, text:'Unpublish', icon:'hide'},
        [overview.OVERVIEW_REMOVE]:{color:'red', action: this.deleteSelection, text:'Delete', icon:'trash'}
    };
    dataActionConfiguration = [];
    state = {searchTerm:'', selected :{}};

    componentDidMount(){
        if(!this.props.overviewData){
            throw new Error(` no overviewData prop loaded`)
        }
        let selectedTmp = {};
        this.props.overviewData.map(
            (item) => {
                selectedTmp[item.id] = false
            });
        this.setState({selected: {...selectedTmp}});
    }
    setSelectOne = (id) =>{
        let selectedTmp = this.state.selected;
        selectedTmp[id] = (!selectedTmp[id]);
        this.setState({selected: {...selectedTmp}});
    };
    setSelection = (e, data) =>{
        if(data.indeterminate){
            this.setState({selected: _.mapValues(this.state.selected, () => false)})
        }
        else{
            this.setState({selected: _.mapValues(this.state.selected, () => (data.checked))})
        }
    };
    searchTable = (e) => {
        this.setState({searchTerm: e.target.value})
    };
    render(){
        return (
            <OverviewClient
                entity={this.entity}
                pk={this.pk}
                tableHeaders={this.tableHeaders}
                data={this.props.overviewData}
                publishItem={this.publishItem}
                client={this.client}
                searchTerm={this.state.searchTerm}
                searchTable={this.searchTable}
                selection={this.state.selected}
                setSelectOne={this.setSelectOne}
                setSelection={this.setSelection}
                dataActions={this.dataActions}
                dataActionConfiguration={this.dataActionConfiguration}
            />
        );
    }
    throwMethodImplementationError = () =>{
        throw new Error(` no method implemented from child class`)
    }
}

export default OverviewClientContainer;
