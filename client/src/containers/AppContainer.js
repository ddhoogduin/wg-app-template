import React, {Component} from 'react'
import {connect} from "react-redux";
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history'

import LoginContainer from './login/LoginContainer'
import App from "../components/App";

import DashboardContainer from "./dashboard/DashboardContainer";
import ClientContainer from "./client/ClientContainer"


class AppContainer extends Component{
    validateAuthentication = () =>{
        if(this.props.authenticationUser !== ''){
            return(
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={DashboardContainer}/>
                        <Route path="/client/:alias"  component={ClientContainer}/>
                    </Switch>
                </Router>
                );
        }
        return(
            <LoginContainer/>
        )
    };
    render(){
        return(<App>
            {this.validateAuthentication()}
        </App>)
    }
}
const mapStateToProps = (state) => {
    return {
        authenticationUser: state.authenticationUser,
    }
};
export default connect(mapStateToProps)(AppContainer)