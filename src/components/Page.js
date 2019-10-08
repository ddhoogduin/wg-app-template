
import React, {Component} from 'react'
import ModuleLoader from './modules/moduleLoader'
import {Grid, Header} from "semantic-ui-react";

class Page extends Component{

    getCollection (collection){
        if (!collection){
            return null
        }
        if (collection in this.props.collections){
            return this.props.collections[collection]
        }
        else{
            return null
        }
    }
    renderModules(){
        return this.props.config.settings.map(
            (setting, key) =>{
                if (setting.module === 'form'){
                    return(
                        <ModuleLoader
                            onSubmit={this.props.onSubmit}
                            page={this.props.config.name}
                            key={`module-${this.props.config.reference}-${key}`}
                            collection={{
                                'form': this.getCollection(setting.collection),
                                'inputs': this.getCollection('inputs')
                            }}
                            setting={setting}
                            protocolStatus={this.props.protocolStatus}
                        />
                    )
                }
                return (
                    <ModuleLoader
                        page={this.props.config.name}
                        key={`module-${this.props.config.reference}-${key}`}
                        collection={this.getCollection(setting.collection)}
                        setting={setting}
                    />
                )
            }
        )
    }
    render() {
        if (!this.props.path){
            return null
        }
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1' dividing>
                            {this.props.config.name}
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                {this.renderModules()}
            </Grid>
        )
    }

}
export  default  Page;