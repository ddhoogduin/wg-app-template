import React from 'react'
import {Grid} from "semantic-ui-react";
import Parser from "html-react-parser";
import {throwError, validateAttributes} from "../../utils/generalHelpers";

const FaqModule = (props) =>{
    if (props.collection){
        let module = 'faqs';
        let required_attributes = ['question', 'answer'];
        if (!validateAttributes(props.collection[0], required_attributes)){
            throwError.moduleAttr(module, required_attributes);return null}
        return (
            <Grid.Row>
                <Grid.Column>
                    {props.collection.map(
                        (item, key) =>{

                            return (
                                <div key={`question-answer-${key}`}>
                                    <p><b>Q: {item.question}</b></p>
                                    {Parser(item.answer)}
                                    <br/>
                                </div>
                            )
                        }
                    )}
                </Grid.Column>
            </Grid.Row>
        )
    }
    return null

};

export default FaqModule