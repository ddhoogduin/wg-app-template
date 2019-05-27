import React, {Component} from 'react'
import {
    Button,
    Icon,
    Table,
    Checkbox
} from 'semantic-ui-react'

import {Link} from "react-router-dom";
import clientComponentDescription from '../../../modules/clientComponentDescription'
import ComponentFrame from '../../../modules/ComponentFrame'

class OverviewFormClient extends Component{

    renderTableHeaders = () =>(
            <Table.Header>
                <Table.Row>{
                    this.props.tableHeaders.map(
                        (header, index) => <Table.HeaderCell key={`formTableHeader-${index}`}>{header.label}</Table.HeaderCell>
                    )
                }
                </Table.Row>
            </Table.Header>
    );

    renderColumnValue = (rowIndex, attribute, format, formItem) =>{
        switch (format) {
            case 'slide':
                return <Checkbox slider color={'green'} />;
            case 'row-number':
                return (rowIndex+1);
            case 'link-detail':
                return (
                    <Link to={`/client/${this.props.client.alias}/form/${formItem.id}`} >
                        {formItem[attribute]}
                    </Link>
                );
            default:
                return formItem[attribute];
        }
    };
    renderTableRow = (formItem, indexRow) =>{
        return this.props.tableHeaders.map(
            (columnItem, index) => (
            <Table.Cell key={`formTableRow-${indexRow}-item${index}`}>
                {this.renderColumnValue(indexRow, columnItem.name, columnItem.format, formItem)}
            </Table.Cell>)
        )
    };
    renderTableContent = () => (
        <Table.Body>
            {
                this.props.listFormClient.map(
                    (formItem, index) => (
                        <Table.Row key={`formTableRow-${index}`}>
                            {this.renderTableRow(formItem, index)}
                        </Table.Row>
                    )
                )
            }
        </Table.Body>
    );
    // render form overview
    render() {
        return(
            <ComponentFrame
                name={'Forms'}
                description={'Overview of client forms'}
                breadCrumb={`${this.props.client.name} / Forms`}
            >
            <Table basic>
                {this.renderTableHeaders()}
                {this.renderTableContent()}
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='4'>
                            <Button floated='right' icon labelPosition='left' primary size='small'>
                                <Icon name='clipboard' /> Add new form
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            </ComponentFrame>
        )
    }
}

export default OverviewFormClient