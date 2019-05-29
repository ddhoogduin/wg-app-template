import React, {Component} from 'react'
import {connect} from "react-redux";
import Client from '../../components/pages/client/Client'
import history from "../../history";
import DashboardContainer from "../dashboard/DashboardContainer";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import HomeClientContainer from "./home/HomeClientContainer";
import OverviewFormClientContainer from "./form/OverviewFormClientContainer";
import DetailFormClientContainer from "./form/DetailFormClientContainer";
import {clientMenu} from "../../constants/menus";
import _ from "lodash";
import {Transition} from 'semantic-ui-react'

import {setActiveClient} from '../../actions/client/clientActions'
import {unsetRedirect} from '../../actions/client/clientManagerActions'
import ComponentFrameClient from "../../components/modules/client/ComponentFrameClient";

class ClientContainer extends Component{

    clientAlias=this.props.match.params.alias;

    renderRouteItem =  (component, {name, description}) =>{
        return (

            <ComponentFrameClient
                name={name}
                description={description}
                breadCrumb={`${this.clientAlias} / ${name.toLowerCase()}`}
            >
                {component}
            </ComponentFrameClient>
        )

    };

    renderClientContent = () => {
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/client/:alias" exact
                           render={(props) => this.renderRouteItem(<HomeClientContainer{...props} />,
                               {name:'Home', description:'Client overview'}
                               )}
                    />
                    <Route path="/client/:alias/forms" exact
                           render={(props) => this.renderRouteItem(<OverviewFormClientContainer {...props} />,
                               {name:'Forms', description:'Overview of client forms'}
                           )}
                    />
                    <Route path="/client/:alias/form/:formId" exact
                           render={(props) => this.renderRouteItem(<DetailFormClientContainer {...props} />,
                               {name:'Form', description:'Edit a client form'}
                           )}
                    />
                </Switch>
            </Router>
        )
    };
    componentDidMount() {
        this.props.setActiveClient(this.clientAlias);
    }
    render(){
        return(
            <Client
                client={this.props.client}
                menuItems={clientMenu}
                activeBody={this.renderClientContent()}
                clientPath={this.props.location.pathname}
                unsetRedirect={this.props.unsetRedirect}
                managerClient={this.props.managerClient}
            />
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