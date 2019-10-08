import React from 'react'
import {Grid} from "semantic-ui-react";
import Timeline from "react-timeline-semantic-ui";
import {throwError, validateAttributes} from "../../utils/generalHelpers";

const module = 'tool_steps';
const required_attributes = ['icon', 'title', 'step_name', 'description', 'tags'];


const ToolStepModule = (props) =>{
    if (props.collection){
        if (!validateAttributes(props.collection[0], required_attributes)){
            throwError.moduleAttr(module, required_attributes);return null}
        return (
            <Grid.Row>
                <Grid.Column className={'timeLine'}>
                    {props.collection.map(
                        (item, key) =>{
                            let dir = ((key + 1)%2 === 1)?'left': 'right';
                            return(
                                <Timeline
                                    key={`timelineItem-${key}`}
                                    className={'time-item'}
                                    direction={dir}
                                    icon={item.icon}
                                    title={item.title}
                                    time={`${key+1} ${item.step_name}`}
                                    description={item.description}
                                    color="blue"
                                    tags={item.tags}
                                    lineHeight={key}
                                />
                            )
                        }
                    )}
                </Grid.Column>
            </Grid.Row>
        )
    }
    return null

};

export default ToolStepModule