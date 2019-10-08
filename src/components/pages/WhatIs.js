
import React, {Component} from 'react'
import {Button, Container, Grid, Header, Icon, Label, List} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Timeline from 'react-timeline-semantic-ui';
import Parser from "html-react-parser";

class WhatIs extends Component{
    icons = ['clipboard', 'cogs', 'eye', 'clipboard', 'graph'];
    icons2 = ['chess board', 'table', 'file alternate', 'dna', 'chess board'];

    render() {
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1' dividing>
                            {this.props.content['what-is'].title}
                        </Header>
                        <p>
                            {Parser(this.props.content['what-is'].content)}
                        </p>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign={'center'}>
                        {(this.props.content['what-is'].github_link)?(<Button as='div' labelPosition='right'>
                            <Button color='blue'>
                                <Icon name='github' />
                                GitHub
                            </Button>
                            <Label as='a' basic  pointing='left'>
                                View our project!
                            </Label>
                        </Button>):null}

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className={'timeLine'}>
                        {this.props.toolSteps.map(
                            (item, key) =>{
                                let dir = ((key + 1)%2 === 1)?'left': 'right';
                                return(
                                    <Timeline
                                        className={'time-item'}
                                        direction={dir}
                                        icon={this.icons[key]}
                                        title={item.title}
                                        time={`${key+1} ${item.step_name}`}
                                        description={item.description}
                                        color="blue"
                                        tags={item.tags}
                                        lineHeight={key}
                                    />
                                    )
                            }
                        )}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column >
                        <Header as='h2' >
                            Check-out the ouput
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column >
                    <List divided relaxed>
                        {this.props.outputExamples.map(
                            (item, key) => {
                                return (
                                    <List.Item>
                                        <List.Icon name={this.icons2[key]} size='large' verticalAlign='top' />
                                        <List.Content>
                                            <List.Header as='a'>{item.title}</List.Header>
                                            <List.Description as='a'>{item.description}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                )
                            }
                        )}
                    </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}
export  default  WhatIs;