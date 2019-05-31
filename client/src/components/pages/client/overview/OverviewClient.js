import React, {Component} from 'react'
import {
    Button,
    Icon,
    Table,
    Checkbox, Grid, Input
} from 'semantic-ui-react'

import {Link} from "react-router-dom";
import _ from 'lodash'

class OverviewClient extends Component {

    renderTableHeaders = () => {
        const listValue = _.keys(_.pickBy(this.props.selection)).length;
        return (<Table.Header>
            <Table.Row>
                <Table.HeaderCell key={`${this.props.entity}TableHeader-Check`}>
                    <Checkbox
                              checked={(this.props.data.length === listValue)}
                              indeterminate={(this.props.data.length !== listValue && listValue > 0)}
                              onClick={(e, data) => this.props.setSelection(e, data)}
                    />
                </Table.HeaderCell>
                {
                    this.props.tableHeaders.map(
                        (header, index) => <Table.HeaderCell
                            key={`${this.props.entity}TableHeader-${index}`}>{header.label}</Table.HeaderCell>
                    )
                }
            </Table.Row>
        </Table.Header>
    )
    };

    renderColumnValue = (rowIndex, attribute, format, item) => {
        switch (format) {
            case 'slide':
                console.log('published'+item[attribute]);
                return <Checkbox toggle  checked={(item[attribute] === 'True')} onClick={() => this.props.publishItem(item[this.props.pk])}/>;
            case 'row-number':
                return (rowIndex + 1);
            case 'link-detail':
                return (
                    <Link to={`/client/${this.props.client.alias}/${this.props.entity}/${item[this.props.pk]}`}>
                        {item[attribute]}
                    </Link>
                );
            default:
                return item[attribute];
        }
    };
    renderTableRow = (item, indexRow) => {
        return (
            <>
                <Table.Cell key={`${this.props.entity}TableRow-${indexRow}-itemSelect`}>
                    <Checkbox checked={this.props.selection[item.id]} onClick={() => this.props.setSelectOne(item.id)}/>
                </Table.Cell>
                {this.props.tableHeaders.map(
                    (columnItem, index) => (
                        <Table.Cell key={`${this.props.entity}TableRow-${indexRow}-item${index}`}>
                            {this.renderColumnValue(indexRow, columnItem.name, columnItem.format, item)}
                        </Table.Cell>)
                )}
            </>
        )
    };
    renderTableContent = () => (
        <Table.Body>
            {
                this.props.data.map(
                    (item, index) => {
                        if (
                            (item.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) !== -1)
                            ||
                            (this.props.searchTerm === '')
                        )
                            return (
                                <Table.Row key={`${this.props.entity}TableRow-${index}`}>
                                    {this.renderTableRow(item, index)}
                                </Table.Row>
                            )
                    }
                )
            }
        </Table.Body>
    );
    renderTableActions = () => {
        const buttons = this.props.dataActions;
        return this.props.dataActionConfiguration.map(
            (item, key) =>(
                <Button
                    onClick={()=>item.action(this.props.selection)}
                    key={`actionButton-${key}`}
                    floated='left'
                    icon labelPosition='left'
                    color={buttons[item.type].color}
                    size='tiny'>
                    <Icon name={buttons[item.type].icon}/> {buttons[item.type].text}
                </Button>
            )
        )
    };

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column textAlign={'right'}>
                            {this.renderTableActions()}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Table basic key={`overviewTable-${this.props.entity}`}>
                    {this.renderTableHeaders()}
                    {this.renderTableContent()}
                </Table>
            </div>
        )
    }
}

export default OverviewClient