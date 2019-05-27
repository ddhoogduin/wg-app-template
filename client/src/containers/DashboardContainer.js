import React, {Component} from 'react'
import {connect} from "react-redux";
import DashboardOverview from "../components/pages/dashboard/DashboardOverview";
import {getClients} from '../actions/client/clientActions'
import _ from 'lodash'

class DashboardContainer extends Component{

    componentDidMount() {
        this.props.getClients();
    }

    render(){
        return(
            <DashboardOverview
                clients={this.props.clients}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        clients: _.values(state.listClient)
    }
};
export default connect(mapStateToProps, {getClients})(DashboardContainer);