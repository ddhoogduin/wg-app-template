import React, {Component, PureComponent} from 'react'
import {connect} from "react-redux";

import OverviewFormClient from '../../../components/pages/client/form/OverviewFormClient'
import {getFormList} from '../../../actions/client/formClientActions'
import _ from "lodash";


class OverviewFormClientContainer extends Component{

    tableHeaders=[
        {label: '#', name:'number', format:'row-number'},
        {label: 'Published', name:'number', format:'slide'},
        {label: 'Name', name:'name', format:'link-detail'},
        {label: 'API', name:'api_name'},
        {label: 'Modified at', name:'modified_at', format:'dateTime'},
    ];

    componentDidMount() {
        this.props.getFormList()
    }
    render(){
        return (
            <OverviewFormClient
                tableHeaders={this.tableHeaders}
                listFormClient={this.props.listFormClient}
                client={this.props.client}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        listFormClient: _.values(state.listFormClient),
        client: state.activeClient
    }
};
export default connect(mapStateToProps, {getFormList})(OverviewFormClientContainer);
