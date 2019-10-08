
import React, {Component} from 'react'
import {Container, Grid, Header, List} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Timeline from 'react-timeline-semantic-ui';
import Parser from "html-react-parser";

class HowToUse extends Component{


    render() {
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1' dividing>
                            {this.props.content['how-to-use'].title}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {Parser(this.props.content['how-to-use'].content)}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}
export  default  HowToUse;