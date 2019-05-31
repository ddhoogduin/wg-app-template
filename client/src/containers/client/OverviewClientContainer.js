import React, {Component} from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash'
import OverviewClient from '../../components/pages/client/overview/OverviewClient'
import {overview} from "../../constants/types";

import {setActiveOverview} from '../../actions/client/overviewClientActions'
import {connect} from "react-redux";

class OverviewClientContainer extends Component{
    dataActions = {
        [overview.OVERVIEW_ADD]:{color:'green', action: this.props.addItem, text:'Add new', icon:'clipboard'},
        [overview.OVERVIEW_PUBLISH]:{color:'blue', action: this.props.publishSelection, text:'Publish', icon:'eye'},
        [overview.OVERVIEW_UNPUBLISH]:{color:'yellow', action: this.props.unpublishSelection, text:'Unpublish', icon:'hide'},
        [overview.OVERVIEW_REMOVE]:{color:'red', action: this.props.deleteSelection, text:'Delete', icon:'trash'}
    };
    dataActionConfiguration = [];
    state = {searchTerm:'', selected :{}};

    componentDidMount(){
        if(!this.props.data){
            throw new Error(` no overviewData prop loaded`)
        }
        let selectedTmp = {};
        this.props.data.map(
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
                entity={this.props.entity}
                pk={this.props.pk}
                tableHeaders={this.props.tableHeaders}
                data={this.props.data}
                client={this.props.client}
                searchTerm={this.state.searchTerm}
                searchTable={this.searchTable}
                selection={this.state.selected}
                setSelectOne={this.setSelectOne}
                setSelection={this.setSelection}
                dataActions={this.dataActions}
                dataActionConfiguration={this.props.dataActionConfiguration}
            />
        );
    }
}

export default OverviewClientContainer;
