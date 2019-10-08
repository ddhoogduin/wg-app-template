import React from 'react'
import Parser from "html-react-parser";
import _ from 'lodash'
import {Grid, Header} from "semantic-ui-react";
import {throwError} from "../../utils/generalHelpers";
import {moduleError} from "../../constants/errorTypes";
import {validateAttributes, validateReferenceAlias} from "../../utils/generalHelpers"

const module = 'content';
const required_attributes = ['reference_alias', 'content'];

const getTitle = (title, size='h2') =>{
    if(!title){
        return null
    }
    return(
        <Grid.Row>
            <Grid.Column >
                <Header as={size}>
                    {title}
                </Header>
            </Grid.Column>
        </Grid.Row>
    )
};

const ContentModule = (props) =>{
    if (props.collection){
        if (!validateAttributes(props.collection[0], required_attributes)){
            throwError.moduleAttr(module, required_attributes);return null}
        const pointer_set = _.keyBy(props.collection, 'reference_alias');
        if (!validateReferenceAlias(props.setting.alias_ref, pointer_set)){
            throwError.module(moduleError.INVALID_MODULE_REF);return null}
        return (
            <>
            {getTitle(pointer_set[props.setting.alias_ref].title)}
            <Grid.Row>
                <Grid.Column>
                {Parser(pointer_set[props.setting.alias_ref].content)}
                </Grid.Column>
            </Grid.Row>
            </>
        )
    }
    return null

};

export default ContentModule