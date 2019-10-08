import React from 'react'

import ButtonModule from './ButtonModule'
import ContentModule from './ContentModule'
import ToolStepModule from './ToolStepsModule'
import ListModule from "./ListModule";
import FaqModule from "./FaqModule";
import ContactCardsModule from "./ContactCardsModule";
import FormModule from "./FormModule";
import {throwError} from "../../utils/generalHelpers";
import {moduleError} from "../../constants/errorTypes";

const ModuleLoader = (props) =>  {
    switch(props.setting.module) {
        case 'content':
            return (
                <ContentModule
                    setting={props.setting}
                    collection={props.collection}
                />
            );
        case 'button':
            return (
                <ButtonModule
                    setting={props.setting}
                />
            );
        case 'tool_steps':
            return (
                <ToolStepModule
                    collection={props.collection}
                />
            );
        case 'list':
            return(
                <ListModule
                    alias_ref={props.setting.alias_ref}
                    setting={props.setting}
                    collection={props.collection}
                />
            );
        case 'faqs':
            return (
                <FaqModule
                    collection={props.collection}
                />
            );
        case 'contact-cards':
            return(
                <ContactCardsModule
                    collection={props.collection}
                />
            );
        case 'form':
            return(
                <FormModule
                    onSubmit={props.onSubmit}
                    collection={props.collection}
                    protocolStatus={props.protocolStatus}
                />
            );
        default:
            throwError.module(moduleError.INVALID_MODULE);
            return null
    }
};

export default ModuleLoader