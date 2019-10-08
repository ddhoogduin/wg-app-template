import React from 'react'
import {Button, Grid, Icon, Label} from "semantic-ui-react";
import {throwError} from "../../utils/generalHelpers";


const ButtonModule = (props) =>{
    switch(props.setting.config.type) {
        case 'github':
            return(
                <Grid.Row>
                    <Grid.Column textAlign={'center'}>
                        <a href={props.setting.config.config.link} target="_blank" rel="noopener noreferrer">
                        <Button as='div' labelPosition='right'>
                            <Button color='blue'>
                                <Icon name='github' />
                                GitHub
                            </Button>
                            <Label basic  pointing='left'>
                                {props.setting.config.config.label}
                            </Label>
                        </Button>
                        </a>
                    </Grid.Column>
                </Grid.Row>
            );
        case 'download':
            return(
                <Grid.Row>
                    <Grid.Column textAlign={'center'}>
                        <a href={props.setting.config.config.link} download target={'_blank'}>
                        <Button icon labelPosition='left'>
                            <Icon name='cloud' />
                            {props.setting.config.config.label}
                        </Button>
                        </a>
                    </Grid.Column>
                </Grid.Row>
            );
        default:
            throwError.module(`Button not rendered, type: ${props.moduleName} not found`);
            return null;
    }
};

export default ButtonModule