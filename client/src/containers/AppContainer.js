import React, {Component} from 'react'
import {connect} from "react-redux";
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history'

import LoginContainer from './LoginContainer'
import App from "../components/App";

import DashboardContainer from "./DashboardContainer";
import ClientContainer from "./ClientContainer"


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