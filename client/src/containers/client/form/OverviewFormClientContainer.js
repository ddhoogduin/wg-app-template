import React, {Component, PureComponent} from 'react'
import {connect} from "react-redux";

import {getFormList} from '../../../actions/client/formClientActions'
import _ from "lodash";
import OverviewClientContainer from "../OverviewClientContainer";


class OverviewFormClientContainer extends OverviewClientContainer{
    client=this.props.client;
    pk='id';
    entity='form';
    tableHeaders=[
        {label: '#', name:'number', format:'row-number'},
        {label: 'Published', name:'number', format:'slide'},
        {label: 'Name', name:'name', format:'link-detail'},
        {label: 'API', name:'api_name'},
        {label: 'Modified at', name:'modified_at', format:'dateTime'},
    ];
    getData = async () => {
        await this.props.getFormList();
        return true
    }
}
const mapStateToProps = (state) => {
    return {
        overviewData: _.values(state.listFormClient),
        client: state.activeClient
    }
};
export default connect(mapStateToProps, {getFormList})(OverviewFormClientContainer);
