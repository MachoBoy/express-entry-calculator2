import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';
import { SubspaceProvider } from 'react-redux-subspace';
import DropdownMenu from './common/dropdownMenu';
import TableForm from './common/TableForm';
import PartASource from './source/PartASource';

class PartAwithout extends Component {
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
                  Without a spouse or common-law partner
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell> Age </Table.Cell>
                <Table.Cell textAlign="center"> 110 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Level of education </Table.Cell>
                <Table.Cell textAlign="center"> 150 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Official languages proficiency </Table.Cell>
                <Table.Cell textAlign="center"> 160 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Canadian work experience </Table.Cell>
                <Table.Cell textAlign="center"> 80 </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>

        <Segment inverted color="black">
          <h1>Age </h1>
          <SubspaceProvider
            mapState={state => state.withoutspouseAge}
            namespace="withoutspouseAge"
          >
            <DropdownMenu
              options={PartASource.WITHOUTSPOUSE_AGE_DATA}
              placeholder="Select Age"
              value={PartASource.WITHOUTSPOUSE_AGE_DATA.value}
            />
          </SubspaceProvider>
        </Segment>

        <Segment inverted color="black">
          <h1>Level of Education</h1>
          <SubspaceProvider
            mapState={state => state.withoutspouseEdu}
            namespace="withoutspouseEdu"
          >
            <TableForm
              headers={PartASource.WITHOUTSPOUSE_EDU_HEADER}
              rows={PartASource.WITHOUTSPOUSE_EDU_DATA}
            />
          </SubspaceProvider>
        </Segment>

        <Segment inverted color="black">
          <h1>Official languages proficiency - first official language</h1>
          <SubspaceProvider
            mapState={state => state.withoutspouseLangFirst}
            namespace="withoutspouseLangFirst"
          >
            <TableForm
              headers={PartASource.WITHOUTSPOUSE_LANG_HEADER}
              rows={PartASource.WITHOUTSPOUSE_LANG_FIRST_DATA}
            />
          </SubspaceProvider>
        </Segment>

        <Segment inverted color="black">
          <h1>Official languages proficiency - second official language</h1>
          <SubspaceProvider
            mapState={state => state.withoutspouseLangSecond}
            namespace="withoutspouseLangSecond"
          >
            <TableForm
              headers={PartASource.WITHOUTSPOUSE_LANG_HEADER}
              rows={PartASource.WITHOUTSPOUSE_LANG_SECOND_DATA}
            />
          </SubspaceProvider>
        </Segment>

        <Segment inverted color="black">
          <h1>Canadian work experience</h1>
          <SubspaceProvider
            mapState={state => state.withoutspouseWork}
            namespace="withoutspouseWork"
          >
            <TableForm
              headers={PartASource.WITHOUTSPOUSE_WORK_HEADER}
              rows={PartASource.WITHOUTSPOUSE_WORK_DATA}
            />
          </SubspaceProvider>
        </Segment>
      </div>
    );
  }
}

export default PartAwithout;
