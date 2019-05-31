import React, {Component, PureComponent} from 'react'
import {connect} from "react-redux";

import {getFormList, togglePublishFormList} from '../../../actions/client/formClientActions'
import _ from "lodash";
import OverviewClientContainer from "../OverviewClientContainer";
import {overview} from '../../../constants/types'
import {setActiveOverview} from "../../../actions/client/overviewClientActions";
import OverviewClient from "../../../components/pages/client/overview/OverviewClient";

class OverviewFormClientContainer extends Component{
    entity='form';
    pk='id';
    addItem = (selection) =>{console.log('test')};
    togglePublishItem = (pk) => {console.log(pk)};
    publishSelection = (selection) =>{this.props.togglePublishFormList(selection, 1)};
    unpublishSelection = (selection) =>{this.props.togglePublishFormList(selection, 0)};
    removeSelection = () =>{console.log('test')};
    tableHeaders=[
        {label: '#', name:'number', format:'row-number'},
        {label: 'Published', name:'published', format:'slide', action: this.togglePublishItem},
        {label: 'Name', name:'name', format:'link-detail'},
        {label: 'API', name:'api_name'},
        {label: 'Modified at', name:'modified_at', format:'dateTime'},
    ];
    dataActionConfiguration = [
        {type: overview.OVERVIEW_ADD, action: this.addItem},
        {type: overview.OVERVIEW_PUBLISH, action: this.publishSelection},
        {type: overview.OVERVIEW_UNPUBLISH, action: this.unpublishSelection},
        {type: overview.OVERVIEW_REMOVE, action: this.removeSelection}
    ];
    componentDidMount() {
        this.props.getFormList();
    }
    render(){
        return (
            <OverviewClientContainer
                client={this.props.client}
                entity={this.entity}
                pk={this.pk}
                data={this.props.overviewData}
                tableHeaders={this.tableHeaders}
                publishItem={this.publishItem}
                dataActionConfiguration={this.dataActionConfiguration}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        overviewData: _.values(state.listFormClient),
        client: state.activeClient
    }
};
export default connect(mapStateToProps,
    {getFormList, togglePublishFormList})
(OverviewFormClientContainer);
