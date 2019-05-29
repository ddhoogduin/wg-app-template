import React, {Component} from 'react'
import PropTypes from 'prop-types';

import OverviewClient from '../../components/pages/client/overview/OverviewClient'


class OverviewClientContainer extends Component{

    client;
    pk;
    entity;
    tableHeaders;
    getData = () => {};
    state = {searchTerm:'', selected :{}};



    componentDidMount(){
        this.getData().then(
            result =>{
                    console.log(this.props.overviewData.length);
                    let selectedTmp = {};
                    this.props.overviewData.map(
                        (item, index) =>{
                            selectedTmp[item.id] = false
                        });
                    this.setState({selected: {...selectedTmp}});
                }
            );
    }
    setSelectOne = (id) =>{
        let selectedTmp = this.state.selected;
        selectedTmp[id] = (!selectedTmp[id]);
        this.setState({selected: {...selectedTmp}});
    };
    setSelection = () =>{

    };
    searchTable = (e) => {
        this.setState({searchTerm: e.target.value})
    };
    render(){
        console.log(this.state.selected);
        return (
            <OverviewClient
                entity={this.entity}
                pk={this.pk}
                tableHeaders={this.tableHeaders}
                data={this.props.overviewData}
                client={this.client}
                searchTerm={this.state.searchTerm}
                searchTable={this.searchTable}
                selection={this.state.selected}
                setSelectOne={this.setSelectOne}
            />
        );
    }
}
export default OverviewClientContainer;
