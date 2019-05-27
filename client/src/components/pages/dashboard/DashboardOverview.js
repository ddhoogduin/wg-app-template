import React, {Component} from 'react'
import {Container, Grid, Segment, Form, Button, Transition, Icon, Input, Card, Image, Dropdown} from 'semantic-ui-react'
import userOptions from '../../modules/userOptions'

import '../../../assets/main.css'
import {Link} from "react-router-dom";

class DashboardOverview extends Component{

    renderPossibleClients(){


        return this.props.clients.map(
            (client, index) =>{
                return(
                        <Card key={`client-item-${index}`}>
                            <Image src={`http://localhost:5000/api/resource/${client.alias}/icons/thumb.jpg`} />
                            <Card.Content>
                                <Card.Header><Link to={`client/${client.alias}`}>{client.name}</Link></Card.Header>
                                <Card.Meta>
                                    <span className='date'>Last updated {client.modified_at}</span>
                                </Card.Meta>
                                <Card.Description>{client.description}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    Moderator: Hodor Hodor
                                </a>
                                &nbsp;|&nbsp;
                                <span className={'pull-right'}>
                                    <Icon name={'trash'}/>
                                    <Icon name={'mail'}/>
                                    <Icon name={'world'}/>
                                </span>
                            </Card.Content>
                        </Card>
                )
            }
        )
    }
    // render form overview
    render() {
        return(
            <div className='dashboardOverviewSection'>
                    <Grid>
                        <Grid.Row className='frameContainer' textAlign={'center'}>
                            <Container textAlign={'center'}>
                                    <h1>Welcome</h1>
                                  <p>Select on of the <b>clients</b> to edit</p>
                                {userOptions()}
                            </Container>
                        </Grid.Row>
                        <Grid.Row  textAlign={'center'} className={'client-container'}>
                            <Container>
                            <Grid.Column width={16} >
                                <Card.Group textAlign={'center'} itemsPerRow={3}>
                                {this.renderPossibleClients()}
                                </Card.Group>
                            </Grid.Column>
                            </Container>
                        </Grid.Row>
                        <Grid.Row  textAlign={'center'}>
                            <Grid.Column>
                                <Button content={'Add new client'}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </div>

        )
    }
}

export default DashboardOverview