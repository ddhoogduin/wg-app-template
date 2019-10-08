import React, {Component} from 'react'
import {connect} from "react-redux";

import App from "../components/App";
import {Dimmer, Icon, Loader, Segment} from "semantic-ui-react";
import _ from 'lodash'
import 'fs'
import history from '../history'

import {getConfig, getApplication} from '../actions/configActions'
import {getCollections} from '../actions/collectionActions'
import {Route, Router, Switch} from "react-router-dom";
import Page from "../components/Page";
import {directProtocol} from '../actions/protocols/directProtocolActions'

import {projectName, baseUrl} from "../config.js";
import {throwError} from "../utils/generalHelpers";
import {configError} from '../constants/errorTypes'


class AppContainer extends Component {

    state = {
        menu: [],
        sloganText: false,
        pageView: false,
        render: false,
        config: false
    };
    onSubmit = (config, values) => {
        switch (config.api.protocol) {
            case 'direct':
                this.props.directProtocol(config, values);
            break;
            default:
                console.log('No valid protocol connected to form')
        }
    };
    getCollections = () =>{
        const collections = [];
        this.props.config.forEach(
            (settingItem) => {
                settingItem.settings.forEach(
                    (item) =>{
                        if(item.collection){
                            if(item.collection === 'form'){
                                collections.push(item.collection);
                                collections.push('inputs');
                            }
                            collections.push(item.collection)
                        }
                    }
                )
            }
        );
        return _.uniq(collections)
    };

    loadConfig = async () =>{
        await this.props.getApplication();
        await this.props.getConfig();
        const collections = this.getCollections();
        await this.props.getCollections(collections);
        this.setState({menu:this.props.config});
    };

    UNSAFE_componentWillMount(){
        if(baseUrl !== null){
            this.setState({config: true});
        }
    }
    componentDidMount() {
        this.loadConfig();
        setTimeout(function() {
            this.setState({render: true})
        }.bind(this), 3000);
        setTimeout(
            () => {
                this.setState({sloganText: true})
            }, 1200);
    }
    renderRoutes() {
        return this.props.config.map(
            (item) =>{
                return (
                    <Route
                        key={`route-${item.reference}`}
                        path={'/'+item.reference}
                        exact
                        render={(props) => this.wrapTransition(
                            <Page
                                {...props}
                                path={'/'+item.reference}
                                config={item}
                                collections={this.props.collections}
                                onSubmit={this.onSubmit}
                                protocolStatus={this.props.protocolStatus}
                            />)
                        }
                    />
                )
            }
        )
    }
    wrapTransition =  (object) => {
        return object
    };
    renderContent() {
        if(this.props.config.length === 0){
            return null
        }
        return (
            <Router history={history}>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => this.wrapTransition(
                            <Page {...props}
                                  path={'/'+this.props.config[0].reference}
                                  config={this.props.config[0]}
                                  collections={this.props.collections}
                                  protocolStatus={this.props.protocolStatus}
                                  onSubmit={this.onSubmit}
                            />)
                        }
                    />
                    {this.renderRoutes()}
                </Switch>
            </Router>
        );
    }
    render() {
        if(this.state.render && !_.isEmpty(this.props.config)) {
            document
                .documentElement.style.setProperty("--color-primary", this.props.application.primary_color);
            return (<App
                    applicationDetails={this.props.application}
                    activePageContent={this.renderContent()}
                    collections={this.props.collections}
                    config={this.props.config}
                    menu={this.props.config}
                    />
            )
        }
        else if(!this.state.render){
            return (
                <Segment className={'loading-segment'}>
                    <Dimmer active>
                        <Loader indeterminate inline='centered'>Preparing the {projectName} website</Loader>
                    </Dimmer>
                </Segment>
            )
        }
        else{
            throwError.config(configError.FAILED_CONFIG);
            return (
                <Segment className={'loading-segment'}>
                    <Dimmer active>
                        <Icon name='close' size='huge' inverted color='grey' />
                        <br/>
                        <p>Failed to load website</p>
                    </Dimmer>
                </Segment>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        config: _.values(state.config),
        collections: state.collections,
        protocolStatus:state.protocolStatus,
        application: state.application[0]
    }
};
export default connect(mapStateToProps, {getConfig, getApplication, getCollections, directProtocol})(AppContainer)