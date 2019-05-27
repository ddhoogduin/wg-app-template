
import React, {Component} from 'react'
import {Button, Container, Grid, Header, Icon, Image, Label, List} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Timeline from 'react-timeline-semantic-ui';

class Download extends Component{

    render() {
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1' dividing>
                            Downloads
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign={'center'}>
                        <Button as='div' labelPosition='right'>
                            <Button color='blue'>
                                <Icon name='github' />
                                GitHub
                            </Button>
                            <Label as='a' basic  pointing='left'>
                                View our project!
                            </Label>
                        </Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h3' >
                            Training sets
                        </Header>
                        <List >
                            <List.Item>
                                <Image avatar>
                                    <Icon avatar circular inverted name='download' />
                                </Image>
                                <List.Content>
                                    <List.Header>Human adult</List.Header>
                                    Dataset
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar>
                                    <Icon avatar circular inverted name='download' />
                                </Image>
                                <List.Content>
                                    <List.Header>Human Fetal</List.Header>
                                    Dataset
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar>
                                    <Icon avatar circular inverted name='download' />
                                </Image>
                                <List.Content>
                                    <List.Header>Human Fetal wo</List.Header>
                                    Dataset
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar>
                                    <Icon avatar circular inverted name='download' />
                                </Image>
                                <List.Content>
                                    <List.Header>Human adult</List.Header>
                                    Dataset
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar>
                                    <Icon avatar circular inverted name='download' />
                                </Image>
                                <List.Content>
                                    <List.Header>Human Fetal</List.Header>
                                    Dataset
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar>
                                    <Icon avatar circular inverted name='download' />
                                </Image>
                                <List.Content>
                                    <List.Header>Human adult</List.Header>
                                    Dataset
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}
export  default  Download;