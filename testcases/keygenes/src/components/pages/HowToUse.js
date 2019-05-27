
import React, {Component} from 'react'
import {Container, Grid, Header, List} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Timeline from 'react-timeline-semantic-ui';

class HowToUse extends Component{

    render() {
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1' dividing>
                            How to use
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h3' >
                            1. Provided “fixed” training sets
                        </Header>
                        <p>
                            KeyGenes has been developed and tested using NGS-derived human fetal transcriptional datasets as both training and test sets (Roost et al., 2015). The datasets used were expanded with available datasets on human adult tissues/organs (Cnop et al., 2014; Fagerberg et al., 2014; Illumina Body Map 2.0).
                        </p>
                        <p>
                            It is worth mentioning, that NGS-derived data of more human adult organs/tissues are available (Fagerberg et al., 2014; Illumina Bodymap 2.0; Epigenomic Roadmap; ENCODE) and could be incorporated as the datasets to be used as training sets are flexible and expandable.
                            We provide seven basic “fixed” training sets, which are supposed to give users a headstart to assign both identity and developmental stages to their differentiated cells (test set). How to create and use a “flexible” training set is described in section 2.
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h5' >
                            1. 1 Basic training set
                        </Header>
                        <p>
                            KeyGenes has been developed and tested using NGS-derived human fetal transcriptional datasets as both training and test sets (Roost et al., 2015). The datasets used were expanded with available datasets on human adult tissues/organs (Cnop et al., 2014; Fagerberg et al., 2014; Illumina Body Map 2.0).
                        </p>
                        <p>
                            It is worth mentioning, that NGS-derived data of more human adult organs/tissues are available (Fagerberg et al., 2014; Illumina Bodymap 2.0; Epigenomic Roadmap; ENCODE) and could be incorporated as the datasets to be used as training sets are flexible and expandable.
                            We provide seven basic “fixed” training sets, which are supposed to give users a headstart to assign both identity and developmental stages to their differentiated cells (test set). How to create and use a “flexible” training set is described in section 2.
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h4' >
                            1.1 Staging training sets
                        </Header>
                        <p>
                            KeyGenes has been developed and tested using NGS-derived human fetal transcriptional datasets as both training and test sets (Roost et al., 2015). The datasets used were expanded with available datasets on human adult tissues/organs (Cnop et al., 2014; Fagerberg et al., 2014; Illumina Body Map 2.0).
                        </p>
                        <p>
                            It is worth mentioning, that NGS-derived data of more human adult organs/tissues are available (Fagerberg et al., 2014; Illumina Bodymap 2.0; Epigenomic Roadmap; ENCODE) and could be incorporated as the datasets to be used as training sets are flexible and expandable.
                            We provide seven basic “fixed” training sets, which are supposed to give users a headstart to assign both identity and developmental stages to their differentiated cells (test set). How to create and use a “flexible” training set is described in section 2.
                        </p>
                    </Grid.Column>
                </Grid.Row>                <Grid.Row>
                <Grid.Column>
                    <Header as='h4' >
                        1.3 Other training sets
                    </Header>
                    <p>
                        KeyGenes has been developed and tested using NGS-derived human fetal transcriptional datasets as both training and test sets (Roost et al., 2015). The datasets used were expanded with available datasets on human adult tissues/organs (Cnop et al., 2014; Fagerberg et al., 2014; Illumina Body Map 2.0).
                    </p>
                    <p>
                        It is worth mentioning, that NGS-derived data of more human adult organs/tissues are available (Fagerberg et al., 2014; Illumina Bodymap 2.0; Epigenomic Roadmap; ENCODE) and could be incorporated as the datasets to be used as training sets are flexible and expandable.
                        We provide seven basic “fixed” training sets, which are supposed to give users a headstart to assign both identity and developmental stages to their differentiated cells (test set). How to create and use a “flexible” training set is described in section 2.
                    </p>
                </Grid.Column>
            </Grid.Row>

            </Grid>
        )
    }

}
export  default  HowToUse;