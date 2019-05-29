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
        console.log((listValue > 0));
        return (<Table.Header>
            <Table.Row>
                <Table.HeaderCell key={`${this.props.entity}TableHeader-Check`}>
                    <Checkbox checked={(this.props.data.length === listValue)}
                              defaultIndeterminate={(this.props.data.length === listValue)}
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
                return <Checkbox slider color={'green'}/>;
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
        return (
            <>
            <Button floated='left' icon labelPosition='left' color={'green'} size='tiny'>
                <Icon name='clipboard'/> Add new
            </Button>
            <Button floated='left' icon labelPosition='left' color={'blue'} size='tiny'>
                <Icon name='eye'/> Publish
            </Button>
            <Button floated='left' icon labelPosition='left' color={'yellow'} size='tiny'>
                <Icon name='hide'/> Unpublish
            </Button>
            <Button floated='left' icon labelPosition='left' color={'red'} size='tiny'>
                <Icon name='trash'/> Delete
            </Button>
            <Input
                placeholder='Search...'
                value={this.props.searchTerm}
                onChange={(e) => this.props.searchTable(e)}/>

            </>
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