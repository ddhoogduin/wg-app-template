import React, {Component} from 'react'

import {
    Button,
    Checkbox,
    Container,
    Form,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Select,
    Transition
} from "semantic-ui-react";
import SplitText from 'react-pose-text';
import Particles from 'react-particles-js';
import _ from 'lodash'
import {Link, Router, withRouter} from "react-router-dom";
import history from "../history";

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 60
    }
};
class App extends Component{
    render() {
        return(
            <div className='appContent'>
                <div className={'welcome'}>
                    <Transition
                        transitionOnMount={true}
                        animation={"fade up"}
                        duration={{ show:2000 }}
                    >
                        <div>
                            <Particles
                                className={'particles'}
                                params={{
                                    "particles": {
                                        "number": {
                                            "value": 40
                                        },
                                        "size": {
                                            "value": 3
                                        }
                                    },
                                    "interactivity": {
                                        "events": {
                                            "onhover": {
                                                "enable": true,
                                                "mode": "repulse"
                                            }
                                        }
                                    }
                                }} />
                        </div>
                    </Transition>
                <Container>
                    <Grid columns={1} >
                        <Grid.Row verticalAlign='middle' className={'welcome-box'} >
                            <Grid.Column textAlign={'center'} >
                                <div className="introName">
                                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                    KeyGenes
                                </SplitText>
                                </div>
                                <div className="sloganText">
                                    <Transition
                                        unmountOnHide={false}
                                        visible={this.props.sloganText}
                                        animation={"fade up"}
                                        duration={{ show:1000 }}
                                    >
                                        <div>
                                            Chuva Sousa Lopes lab
                                        </div>
                                    </Transition>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Transition
                            unmountOnHide={false}
                            visible={this.props.sloganText}
                            animation={"fade down"}
                            duration={{ show:800 }}
                        >
                        <Grid.Row>
                            <Grid.Column>
                                <Menu inverted  widths={6} className={'mainMenu'}  pointing secondary  >
                                    <Router history={history}>
                                    {  this.props.menuItems.map(
                                        (item, key) => (
                                        <Menu.Item  name={item.name} key={`menuItem-${key}`} as={Link} to={item.link}>
                                        {item.text}
                                        </Menu.Item>
                                        )
                                        )}
                                    </Router>
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                        </Transition>
                    </Grid>
                </Container>
                </div>
                <Transition
                    unmountOnHide={false}
                    visible={this.props.sloganText}
                    animation={"fade up"}
                    duration={{ show:1000 }}
                >
                <div className={'page-section'}>
                    <Container>
                        {this.props.pageContent}
                    </Container>
                </div>
                </Transition>
            </div>
        )
    }
}

export default App