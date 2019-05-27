import React, {Component, PureComponent} from 'react'
import {connect} from "react-redux";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis, Radar,
} from 'recharts'
import {Grid, Header, Icon, Image, Label, List} from "semantic-ui-react";
import ComponentFrame from "../../modules/ComponentFrame";


class HomeClient extends Component{
    data = [
        {
            name: 'Jan', uv: 3100, pv: 2400, amt: 2400,
        },
        {
            name: 'Feb', uv: 4000, pv: 1398, amt: 2210,
        },
        {
            name: 'Mar', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Apr', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'May', uv: 5090, pv: 10800, amt: 2981,
        }
    ];
    data02 = [
        {
            subject: 'Linux', A: 40, B: 110, fullMark: 130,
        },
        {
            subject: 'Ios', A: 8, B: 90, fullMark: 130,
        },
        {
            subject: 'OSX', A: 17, B: 130, fullMark: 130,
        },
        {
            subject: 'Android', A: 12, B: 100, fullMark: 130,
        },
        {
            subject: 'Windows', A: 30, B: 130, fullMark: 130,
        },
        {
            subject: 'Other', A: 3, B: 85, fullMark: 130,
        },
    ];

    render(){
        return (
            <ComponentFrame
                name={'Home'}
                description={'Overview of client'}
                breadCrumb={`${this.props.client.name}`}
            >
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as={'h2'} textAlign={'center'}>
                                Visitors per month
                            </Header>
                            <AreaChart
                                width={600}
                                height={450}
                                data={this.data}
                                margin={{
                                    top: 10, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#2185d0" fill="#2185d0" />
                            </AreaChart>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header as={'h2'} textAlign={'center'}>
                                Percentage of OS tracked
                            </Header>

                            <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={550} data={this.data02}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Mike" dataKey="A" stroke="#db2828" fill="#db2828" fillOpacity={0.6} />
                            </RadarChart>
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as={'h2'} textAlign={'center'}>
                                Notifications
                            </Header>
                            <List divided verticalAlign='middle'>
                                <List.Item>
                                    <List.Content floated='right'>
                                        <Label color={'green'}>
                                            <Icon name='calendar'  /> 02/05/2019 15:43
                                        </Label>
                                    </List.Content>
                                    <List.Content>
                                        <Icon className={'avatar'} color='red' inverted circular name='mail' />
                                        <b> &nbsp; Hodor Hodor</b> sent a client-related email </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='right'>
                                        <Label color={'green'}>
                                            <Icon name='calendar'  /> 02/05/2019 15:23
                                        </Label>
                                    </List.Content>
                                    <List.Content>
                                        <Icon className={'avatar'} color='black' inverted circular name='user' />
                                        <b> &nbsp; Hodor Hodor</b> added <b>Bran Tha Men</b> as additional <u>moderator</u></List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='right'>
                                        <Label color={'green'}>
                                            <Icon name='calendar'  /> 02/05/2019 15:17
                                        </Label>
                                    </List.Content>
                                    <List.Content>
                                        <Icon className={'avatar'} color='blue' inverted circular name='chat' />
                                        <b> &nbsp; Hodor Hodor</b> sent a message through <a>@mattermost</a> </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='right'>
                                        <Label color={'yellow'}>
                                            <Icon name='calendar'  /> 25/04/2019 10:43
                                        </Label>
                                    </List.Content>
                                    <List.Content>
                                        <Icon className={'avatar'} color='yellow' inverted circular name='edit' />
                                        <b> &nbsp; Hodor Hodor</b> made changes to the client </List.Content>
                                </List.Item>

                            </List>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header as={'h2'} textAlign={'center'}>
                                Users
                            </Header>
                            <List horizontal relaxed='very'>
                                <List.Item textAlign={'center'}>
                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                                    <List.Content>
                                        <List.Header as='a'>Dylan Hoogduin </List.Header>
                                        Administrator
                                        <List.Description>
                                            <b >Currently online</b>
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                    <List.Content>
                                        <List.Header as='a'>Hodor Hodor</List.Header>
                                        Moderator
                                        <List.Description>
                                            Last seen two days ago.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                    <List.Content>
                                        <List.Header as='a'>Bran Tha Men</List.Header>
                                        Moderator
                                        <List.Description>
                                            Last seen two days ago.
                                        </List.Description>
                                    </List.Content>
                                </List.Item>

                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </ComponentFrame>


        );
    }
}

export default HomeClient;
