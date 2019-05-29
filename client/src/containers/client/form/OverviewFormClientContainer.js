import React, {Component, PureComponent} from 'react'
import {connect} from "react-redux";

import {getFormList} from '../../../actions/client/formClientActions'
import _ from "lodash";
import OverviewClientContainer from "../OverviewClientContainer";
import {overview} from '../../../constants/types'
import {setActiveOverview} from "../../../actions/client/overviewClientActions";

class OverviewFormClientContainer extends OverviewClientContainer{
    client=this.props.client;
    pk='id';
    entity='form';
    tableHeaders=[
        {label: '#', name:'number', format:'row-number'},
        {label: 'Published', name:'published', format:'slide'},
        {label: 'Name', name:'name', format:'link-detail'},
        {label: 'API', name:'api_name'},
        {label: 'Modified at', name:'modified_at', format:'dateTime'},
    ];
    dataActionConfiguration = [
        overview.OVERVIEW_ADD,
        overview.OVERVIEW_PUBLISH,
        overview.OVERVIEW_UNPUBLISH,
        overview.OVERVIEW_REMOVE
    ];
    publishItem = (pk) => {};
    componentDidMount() {
        this.props.getFormList();
        super.componentDidMount();
    }
}
const mapStateToProps = (state) => {
    return {
        overviewData: _.values(state.listFormClient),
        client: state.activeClient
    }
};
export default connect(mapStateToProps,
    {getFormList})
(OverviewFormClientContainer);
