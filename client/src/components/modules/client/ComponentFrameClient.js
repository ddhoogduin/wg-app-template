import React, {Component} from 'react'
import {Divider, Grid, Icon, Segment, Sidebar, Transition} from "semantic-ui-react";

class ComponentFrameClient extends Component{
    render(){
        return (
            <Transition
                unmountOnHide={true}
                animation={"fade up"}
                duration={{ show:500 }}
                transitionOnMount={true}
                key={`client-content-item-${this.props.name}`}
            >
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
            </Transition>
        )
    }
}
export default ComponentFrameClient