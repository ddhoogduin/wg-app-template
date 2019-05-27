import React, {Component} from 'react'
import {connect} from "react-redux";
import ClientMain from '../components/pages/client/ClientMain'
import history from "../history";
import DashboardContainer from "./DashboardContainer";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import HomeClientContainer from "./client/HomeClientContainer";
import OverviewFormClientContainer from "./client/form/OverviewFormClientContainer";
import DetailFormClientContainer from "./client/form/DetailFormClientContainer";
import {clientMenu} from "../constants/menus";
import _ from "lodash";

import {setActiveClient} from '../actions/client/clientActions'
import {unsetRedirect} from '../actions/client/clientManagerActions'

class ClientContainer extends Component{

    clientAlias=this.props.match.params.alias;


    renderClientContent = () => {
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/client/:alias" exact component={HomeClientContainer}/>
                    <Route path="/client/:alias/form/:formId" exact component={DetailFormClientContainer} />
                    <Route path="/client/:alias/forms" exact component={OverviewFormClientContainer}/>
                </Switch>
            </Router>
        )
    }
    componentDidMount() {
        this.props.setActiveClient(this.clientAlias);
    }
    render(){
        return(
            <ClientMain
                client={this.props.client}
                menuItems={clientMenu}
                activeBody={this.renderClientContent()}
                clientPath={this.props.location.pathname}
                unsetRedirect={this.props.unsetRedirect}
                managerClient={this.props.managerClient}
            >
            </ClientMain>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        client: state.activeClient,
        managerClient: state.managerClient
    }
};
export default connect(mapStateToProps, {setActiveClient, unsetRedirect})(ClientContainer);