
import React, {Component} from 'react'
import {Button, Container, Grid, Header, Icon, Label, List} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Timeline from 'react-timeline-semantic-ui';

class WhatIs extends Component{

    render() {
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1' dividing>
                            What is
                        </Header>
                        <p className={'introText'}>
                            <b>KeyGenes is an algorithm to predict the identity</b> and determines identity scores of queried samples (test set) to a provided group of samples (training set). It uses transcriptional profiles of the queried data (test set) and matches them to sets of transcriptional profiles of organs or cell types (training set). KeyGenes uses a 10-fold cross validation on the basis of a LASSO (Least Absolute Shrinkage and Selection Operator) regression available in the R package “glmnet” <Link to={''}>(Friedman et al., 2010)</Link>.
                        </p>

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
                    <Grid.Column className={'timeLine'}>
                        <Timeline
                            className={'time-item'}
                            direction="left"
                            icon="clipboard list"
                            title="Training & test set"
                            time="1. Input"
                            description="With use of the from a training set can be selected on a wished test set. Additional parameters can be configured."
                            color="blue"
                            tags={['Training-set','Test-set', 'Specific-input', 'Organs', 'Tissues', 'Cells', 'PSC-derived']}
                            lineHeight={1}
                        />
                        <Timeline
                            direction="right"
                            icon="cogs"
                            title="The KeyGenes algorithm"
                            time="2. Run the tool"
                            description="Based on the specified input the KeyGenes algorithm will be excuted"
                            color="blue"
                            tags={['Computation', 'Run Algorithm']}
                            lineHeight={2}
                        />
                        <Timeline
                            direction="left"
                            icon="eye"
                            title="Algorithm output"
                            time="3. Retrieve results"
                            description="Retrieve the various forms of computation feedback"
                            color="blue"
                            tags={['Output files', 'Heatmap', 'Identity matrix', 'Predictions', 'Classifiers genes']}
                            lineHeight={3}
                        />
                        <Timeline
                            direction="right"
                            icon="area graph"
                            title="Visualization"
                            time="4. Optional data-visualization  "
                            description="Optionally a direct data-visualization can be depicted of the results."
                            color="blue"
                            tags={['Data-visualization','Graphs']}
                            lineHeight={3}
                        />
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
                        <List.Item>
                            <List.Icon name='chess board' size='large' verticalAlign='top' />
                            <List.Content>
                                <List.Header as='a'>A heatmap containing identity scores</List.Header>
                                <List.Description as='a'>A PDF file (KeyGenes_Heatmap.pdf) with a heatmap containing the identity scores (between 0 and 1) of your samples matched to the samples included in the training set.</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='table' size='large' verticalAlign='top' />
                            <List.Content>
                                <List.Header as='a'>Identity matrix</List.Header>
                                <List.Description as='a'> A text file (KeyGenes_Matrix.txt) containing a matrix with the identity scores (between 0 and 1) of the queried samples matched to the samples included in the training set.</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='file alternate' size='large' verticalAlign='top' />
                            <List.Content>
                                <List.Header as='a'>Sample prediction overview</List.Header>
                                <List.Description as='a'>A text file (KeyGenes_Prediction.txt) with the queried samples and the sample in the training set with the highest identity score.<br/><br/> </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='dna' size='large' verticalAlign='top' />
                            <List.Content>
                                <List.Header as='a'>Sample prediction overview</List.Header>
                                <List.Description as='a'>A text file (KeyGenes_Classifier.txt) containing the list of classifier genes per sample calculated from the training set used to determine the identity scores (between 0 and 1) of the queried samples matched to the samples included in the training set.</List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}
export  default  WhatIs;