import React, {Component} from 'react'
import {Divider, Grid, Icon, Segment, Sidebar} from "semantic-ui-react";
import clientBreadcrumbs from "./clientBreadcrumbs";
import OverviewFormClient from "../pages/client/form/DetailFormClient";

class ComponentFrame extends Component{
    render(){
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={1}/>
                    <Grid.Column width={11}>
                        <Segment className={'breadCrumb'}>
                            <Icon name={'home'}/> {this.props.breadCrumb}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={1}/>
                    <Grid.Column width={11}>
                        <Segment className={'client-content-segment'}>
                            <div>
                                <Divider horizontal className={'mainTitleContentClient'}><b>{this.props.name} | </b>
                                    <span className={'dividerSub'}> {this.props.description}</span></Divider>
                            </div>
                            {this.props.children}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
export default ComponentFrame