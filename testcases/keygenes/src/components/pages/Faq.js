
import React, {Component} from 'react'
import {Container, Grid, Header, List} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Timeline from 'react-timeline-semantic-ui';

class Faq extends Component{

    render() {
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1' dividing>
                            FAQ's
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <p>
                            <b>Q: I am having problems to download the R-package “glmnet ” version 1.9-8. What can I do?</b>
                        </p>
                        <p>
                            <b>A:</b> The package “glmnet ” version 1.9-8 is not available for all the versions of R and it is not always compatible with all the versions of the packages downloaded before. For that reason, we provide a new set of versions that can be used together:
                            <ul>
                                <li>R version 2.15.3 (2013-03-01)</li>
                                <li>glmnet_1.9-5</li>
                                <li>ggplot2_0.9.3.1</li>
                                <li>gplots_2.11.0</li>
                                <li>limma_3.14.4</li>
                            </ul>
                        </p>
                        <p>
                            <b>Q: I do not know R. Can I still use KeyGenes?</b>
                        </p>
                        <p>
                            <b>A:</b> Yes, a Web App is provided but it is at the moment limited to the use of “fixed” training sets of human transcriptional data. In that Web App, a test set can be uploaded and one of the provided “fixed” training sets can be selected. At the moment the WebApp is also limited to the use of NGS-derived data. Choosing a “flexible” training set at the moment is not possible using the Web App.
                        </p>                        <p>
                        <b>Q: Can I use KeyGenes on a microarray-derived test set?</b>
                    </p>
                        <p>
                            <b>A:</b>Although KeyGenes was designed for NGS-data, it can be applied on a microarray-derived test set by using Script 3. However, microarray-derived data of tissues/organs from Affymetrix and Illumina platforms have been tested only using the training set “fetal”. Microarray-derived data of differentiated cells have not been tested with other training sets, and therefore, the results should be interpreted with care. See section 2.3. for more information. In addition, we also suggest to use http://cellnet.hms.harvard.edu/ for that.
                        </p>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}
export  default  Faq;