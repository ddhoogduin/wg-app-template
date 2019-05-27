import React, {Component} from 'react'
import {connect} from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import App from "../components/App";
import {getInputList} from "../actions/client/inputClientActions"
import {getForm} from "../actions/client/formClientActions"
import listInputReducer from "../reducers/client/input/listInputReducer";
import {Route, Router, Switch, withRouter} from "react-router-dom";
import history from '../history'
import {mainMenu} from '../constants/menus'
import {spring, AnimatedSwitch} from 'react-router-transition';
import {mapStyles, bounceTransition} from '../constants/routAnimations'

import WhatIs from '../components/pages/WhatIs'
import HowToUse from '../components/pages/HowToUse'
import Downloads from '../components/pages/Downloads'
import Tool from '../components/pages/Tool'

import {excApi} from '../actions/protocols/directProtocolActions'
import {Form, Grid, Header, Segment, Transition} from "semantic-ui-react";
import Faq from  "../components/pages/Faq"
import Contacts from "../components/pages/Contacts";


class AppContainer extends Component {
    state = {
        sloganText: false,
        pageView: false
    };
    onSubmit = (formValues) => {
        this.props.excApi(formValues)
    }

    componentDidMount() {
        setTimeout(
            () => {
                this.setState({sloganText: true})
            }, 1200);
        this.props.getInputList();
        this.props.getForm(8);
    }

    wrapTransition =  (object) => {
        return (

                <Transition
                    onHide={"fade"}
                    unmountOnHide={true}
                    animation={"fade up"}
                    duration={{ show:500 }}
                    key={`page-${object.props.path}`}
                    transitionOnMount={true}
                >
                    <div>
                        {object}
                    </div>
            </Transition>
        )
    }

    renderContent() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact render={(props) => this.wrapTransition(<WhatIs {...props} path={'/'}/>)}/>
                    <Route path="/what-is" exact
                           render={(props) => this.wrapTransition(<WhatIs path={'/what-is'} {...props} />)}/>
                    <Route path="/how-to-use" exact
                           render={(props) => this.wrapTransition(<HowToUse path={'/how-to-use'} {...props} />)}/>
                    <Route path="/downloads" exact
                           render={(props) => this.wrapTransition(<Downloads path={'/downloads'} {...props} />)}/>
                    <Route path="/tool" exact render={(props) => this.wrapTransition(<Tool {...props}
                                                                                           path={'/tool'}
                                                                                           inputList={this.props.listInput}
                                                                                           onSubmit={this.onSubmit}
                                                                                           protocolStatus={this.props.protocolStatus}/>)}/>
                    <Route path="/faq" exact
                           render={(props) => this.wrapTransition(<Faq path={'/faq'} {...props} />)}/>
                    <Route path="/contacts" exact
                           render={(props) => this.wrapTransition(<Contacts path={'/contacts'} {...props} />)}/>
                </Switch>
            </Router>
        );
    }

    render() {
        return (<App
            setPageChange={this.setPageChange}
            pageContent={this.renderContent()}
            inputList={this.props.listInput}
            sloganText={this.state.sloganText}
            menuItems={mainMenu}
            activePage={this.routerPath}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        listInput: state.listInput,
        activeFormClient: state.activeFormClient,
        protocolStatus: state.protocolStatus
    }
};
export default connect(mapStateToProps, {getInputList, getForm, excApi})(AppContainer)