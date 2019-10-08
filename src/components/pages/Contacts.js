
import React, {Component} from 'react'
import {Card, Container, Grid, Header, Icon, Image, List} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Timeline from 'react-timeline-semantic-ui';

class Contacts extends Component{

    render() {
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1' dividing>
                            Contacts
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Card.Group textAlign={'center'} itemsPerRow={3}>
                        <Card>
                            <Image src='http://www.keygenes.nl/key/wp-content/uploads/2017/10/sus-3.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Susana Lopes</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Associate Professor, LUMC, the Netherlands
                                    Guest Professor, Gent University, Belgium
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='mail' />
                                    S.M..._Lopes@lumc.nl
                                </a>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='http://www.keygenes.nl/key/wp-content/uploads/2017/10/matthias-5.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Matthias Roost</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    PhD student: human development: pancreas, pluripotency and epigenetics
                                    Bontius Stichting Graduate Student
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='mail' />
                                    test@lumc.nl
                                </a>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image src='http://www.keygenes.nl/key/wp-content/uploads/2019/04/smallAvatar.jpeg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Davy Cats</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Bioinformatician, Sequencing Analysis Support Core, LUMC, the Netherlands
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='mail' />
                                    D.Cats@lumc.nl
                                </a>
                            </Card.Content>
                        </Card>
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}
export  default  Contacts;