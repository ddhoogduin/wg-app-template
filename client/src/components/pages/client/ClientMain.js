import React, {Component} from 'react'
import {
    Container,
    Grid,
    Segment,
    Form,
    Button,
    Transition,
    Icon,
    Input,
    Card,
    Image,
    Dropdown,
    Menu, Label,
    Sidebar, Header, Divider
} from 'semantic-ui-react'
import userOptions from '../../modules/userOptions'
import clientBreadcrumbs from '../../modules/clientBreadcrumbs'

import '../../../assets/main.css'
import {Link} from "react-router-dom";

class ClientMain extends Component{

    renderMenuItems(){
        return this.props.menuItems.items.map(
            (item, index) =>(
                <Link key={`mainMenuItem-${index}`} to={`/client/${this.props.client.alias}${item.action}`}>
                <Menu.Item>
                    <Icon name={item.icon} />
                    {item.name}
                </Menu.Item>
                </Link>
            )
        )
    }
    renderMenu(){
        return(
            <Sidebar.Pushable >
                <Sidebar
                    as={Segment}
                    className={'sidebar-client'}
                    animation={'uncover'}
                    direction={'left'}
                    icon='labeled'
                    vertical
                    visible={true}
                    width={'wide'}
                >
                    <div className={'logo-menu-box'}>
                        <Header as='h1' icon>
                            {this.props.client.name}
                            <Header.Subheader>Web-application client </Header.Subheader>
                        </Header>
                    </div>
                    <Menu fluid vertical inverted>
                        {this.renderMenuItems()}
                    </Menu>
                </Sidebar>
                <Sidebar.Pusher className={'mainContent-client'}>
                    {this.props.activeBody}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }
    renderHeader(){
        return(
            <Menu secondary>
                <Menu.Item name='Client-dashboard'  />
                <Menu.Item
                    name='Settings'
                />
                <Menu.Item
                    name='Users'
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item>
                        {userOptions()}
                    </Menu.Item>
                    <Menu.Item>
                        <Label as='a' color={'red'}>
                            <Icon name='mail' /> 3
                        </Label>
                        <Label as='a' color={'blue'}>
                            <Icon name='chat' /> 1
                        </Label>
                        <Label as='a' color={'green'}>
                            <Icon name='bell' /> 5
                        </Label>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
    // render form overview
    render() {
        return(
            <div className='clientOverviewSection'>
                <Grid>
                        <Grid.Column>
                            <Segment>
                            {this.renderHeader()}
                            </Segment>
                        </Grid.Column>
                </Grid>
                <Grid className={'no-offset'}>
                    <Grid.Column className={'no-offset client-content-container'}>
                        {this.renderMenu()}
                    </Grid.Column>
                </Grid>
            </div>

        )
    }
}

export default ClientMain