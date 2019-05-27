import React from 'react'
import {Divider, Icon, Segment} from "semantic-ui-react";

export default (path, clientName) =>{
    const parts = path.split('/');
    parts.splice(0,3);
    let pathString = clientName;
    if(parts.length > 0 ){
        pathString +=' /';
    }
    pathString+= parts.map(
        (item) => {
                return ' '+item.charAt(0).toUpperCase() + item.slice(1)+' /'
        }
    )
    return(
        <Segment className={'breadCrumb'}>
            <Icon name={'home'}/> {pathString}
        </Segment>
    )
}