import React, {Component} from 'react'
import {Container, Grid, Segment, Form, Button, Transition, Icon, Input} from 'semantic-ui-react'
import {Field, reduxForm, change, untouch} from 'redux-form'
import {textInput, checkBoxInput} from '../../helpers/redux-form-inputs'
import {required, minValue5, email} from '../../../constants/formValidationRules'

import '../../../assets/main.css'

class LoginForm extends Component{

    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues)
    };
    renderLoginErrors(){
        if(this.props.loginFormErrors !== ''){
            return(
                <div className={'errorMessage'}>{this.props.loginFormErrors}</div>
            )
        }
    }
    renderLoginForm(){
        return(
            <div>
                <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field
                        name={'email'}
                        component={textInput}
                        validate={[ required, email ]}
                        label={'Username'}
                        inputAttr={{
                            placeholder:'User email',
                            type:'email',
                            icon:'users',
                            iconPosition:'left'

                        }}
                    />
                    <Field
                        name={'password'}
                        component={textInput}
                        label={'Password'}
                        validate={[ required, minValue5 ]}
                        inputAttr={{
                            placeholder:'Password',
                            type:'password',
                            icon:'lock',
                            iconPosition:'left'
                        }}
                    />
                    <br/>
                    {this.renderLoginErrors()}
                    <Button type='submit' disabled={this.props.submitting} fluid>Sign in</Button>
                </Form>
            </div>
        )
    }

    // render form overview
    render() {
        return(
            <div className='loginSection'>
                <Container className={'container-no-margin'}>
                    <Grid>
                        <Grid.Row className='frameContainer'>
                                <Grid.Column width={5}/>
                              <Grid.Column verticalAlign='middle' textAlign='center' width={6}>
                                  <div>
                                      <div>
                                          <h1 className='sascLogo'>

                                              <Icon  name='mixcloud' />
                                              &nbsp;SASC-<b>WEB</b>
                                          </h1>
                                      </div>
                                  <Segment>
                                      {this.renderLoginForm()}
                                  </Segment>
                                  <Segment>
                                      <p>
                                          Having <a>trouble</a> signing in?
                                          <br/>
                                          Request for <a>registration</a>
                                      </p>
                                  </Segment>
                                  </div>
                              </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>

        )
    }
}

export default reduxForm({
    form:'loginForm'
})(LoginForm)