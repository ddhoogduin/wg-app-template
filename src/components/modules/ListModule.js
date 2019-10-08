import React from 'react'
import _ from 'lodash'
import {Grid, Header, Icon, Image} from "semantic-ui-react";
import {List} from "semantic-ui-react";
import {throwError, validateAttributes, validateReferenceAlias} from "../../utils/generalHelpers";
import {moduleError} from "../../constants/errorTypes";

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
const ListModule = (props) =>{
    if (props.collection){
        switch (props.setting.config.type) {
            case 'icon-list':
                return renderIconList(props);
            case 'download-list':
                return renderDownloadList(props);
            default:
                return null
        }
    }
    return null

};
const renderIconList = (props) => {
    const module = 'tool_steps';
    const required_attributes = ['icon', 'title', 'description'];
    if (!validateAttributes(props.collection[0], required_attributes)){
        throwError.moduleAttr(module, required_attributes);return null}
    const pointer_set = _.keyBy(props.collection, 'reference_alias');
    if (!validateReferenceAlias(props.setting.alias_ref, pointer_set)){
        throwError.module(moduleError.INVALID_MODULE_REF);return null}

    return (
        <>
            {getTitle(props.setting.title)}
            <Grid.Row>
                <Grid.Column >
                    <List divided relaxed>
                        {props.collection.map(
                            (item, key) => {
                                return (
                                    <List.Item key={`list-icon-${key}-${props.setting.collection}`}>
                                        <List.Icon name={item.icon} size='large' verticalAlign='top' />
                                        <List.Content>
                                            <List.Header as='a'>{item.title}</List.Header>
                                            <List.Description as='a'>{item.description}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                )
                            }
                        )}
                    </List>
                </Grid.Column>
            </Grid.Row>
        </>
    );
};
const renderDownloadList = (props) =>{
    const module = 'tool_steps';
    const required_attributes = ['link', 'title', 'description'];
    if (!validateAttributes(props.collection[0].items[0], required_attributes)){
        throwError.moduleAttr(module, required_attributes);return null}
    const pointer_set = _.keyBy(props.collection, 'reference_alias');
    if (!validateReferenceAlias(props.setting.alias_ref, pointer_set)){
        throwError.module(moduleError.INVALID_MODULE_REF);return null}
    return (
        <Grid.Row>
            <Grid.Column>
                {getTitle(props.setting.title, 'h3')}
                <List >
                    {pointer_set[props.alias_ref].items.map(
                        (item, key) => {
                            return (
                                <List.Item key={`download-list-${key}`}>
                                    <Image avatar>
                                        <a href={item.link} download>
                                            <Icon avatar={'true'} circular inverted name='download' />
                                        </a>
                                    </Image>
                                    <List.Content>
                                        <List.Header>{item.title}</List.Header>
                                        {item.description}
                                    </List.Content>
                                </List.Item>
                            )
                        }
                    )}
                </List>
            </Grid.Column>
        </Grid.Row>
    );
}

export default ListModule