import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';
import DropdownMenu from './common/dropdownMenu';
import TableForm from './common/TableForm';
import PartASource from './source/PartASource';

class PartAwith extends Component {
  render() {
    return (
      <div className="partA">
        <Segment inverted color="orange">
          <h1>A. Core/human capital factors </h1>
          <Table
            className="summaryTable"
            size="large"
            padded
            striped
            celled
            verticalAlign={'middle'}
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> Factor </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  With a spouse or common-law partner
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell> Age </Table.Cell>
                <Table.Cell textAlign="center"> 100 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Level of education </Table.Cell>
                <Table.Cell textAlign="center"> 140 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Official languages proficiency </Table.Cell>
                <Table.Cell textAlign="center"> 150 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Canadian work experience </Table.Cell>
                <Table.Cell textAlign="center"> 70 </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>

        <Segment inverted color="black">
          <h1>Age </h1>
          <DropdownMenu
            serchInput={{ type: 'number' }}
            options={PartASource.WITHSPOUSE_AGE_DATA}
            placeholder="Select Age"
          />
        </Segment>

        <Segment inverted color="black">
          <h1>Level of Education</h1>
          <TableForm
            headers={PartASource.WITHSPOUSE_EDU_HEADER}
            rows={PartASource.WITHSPOUSE_EDU_DATA}
          />
        </Segment>

        <Segment inverted color="black">
          <h1>Official languages proficiency - first official language</h1>
          <TableForm
            headers={PartASource.WITHSPOUSE_LANG_HEADER}
            rows={PartASource.WITHSPOUSE_LANG_FIRST_DATA}
          />
        </Segment>

        <Segment inverted color="black">
          <h1>Official languages proficiency - second official language</h1>
          <TableForm
            headers={PartASource.WITHSPOUSE_LANG_HEADER}
            rows={PartASource.WITHSPOUSE_LANG_SECOND_DATA}
          />
        </Segment>

        <Segment inverted color="black">
          <h1>Canadian work experience</h1>
          <TableForm
            headers={PartASource.WITHOUTSPOUSE_WORK_HEADER}
            rows={PartASource.WITHSPOUSE_WORK_DATA}
          />
        </Segment>
      </div>
    );
  }
}

export default PartAwith;
