import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Table } from 'semantic-ui-react';
import { SubspaceProvider } from 'react-redux-subspace';
import DropdownMenu from './common/dropdownMenu';
import TableForm from './common/TableForm';
import PartASource from './source/PartASource';
import { select } from '../actions';

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
          <SubspaceProvider
            mapState={state => state.withspouseAge}
            namespace="withspouseAge"
          >
            <DropdownMenu
              options={PartASource.WITHSPOUSE_AGE_DATA}
              placeholder="Select Age"
              value={PartASource.WITHSPOUSE_AGE_DATA.value}
              onClick={this.props.select}
            />
          </SubspaceProvider>
        </Segment>

        <Segment inverted color="black">
          <h1>Level of Education</h1>
          <SubspaceProvider
            mapState={state => state.withspouseEdu}
            namespace="withspouseEdu"
          >
            <TableForm
              headers={PartASource.WITHSPOUSE_EDU_HEADER}
              rows={PartASource.WITHSPOUSE_EDU_DATA}
            />
          </SubspaceProvider>
        </Segment>

        <Segment inverted color="black">
          <h1>Official languages proficiency - first official language</h1>
          <SubspaceProvider
            mapState={state => state.withspouseLangFirst}
            namespace="withspouseLangFirst"
          >
            <TableForm
              headers={PartASource.WITHSPOUSE_LANG_HEADER}
              rows={PartASource.WITHSPOUSE_LANG_FIRST_DATA}
            />
          </SubspaceProvider>
        </Segment>

        <Segment inverted color="black">
          <h1>Official languages proficiency - second official language</h1>
          <SubspaceProvider
            mapState={state => state.withspouseLangSecond}
            namespace="withspouseLangSecond"
          >
            <TableForm
              headers={PartASource.WITHSPOUSE_LANG_HEADER}
              rows={PartASource.WITHSPOUSE_LANG_SECOND_DATA}
            />
          </SubspaceProvider>
        </Segment>

        <Segment inverted color="black">
          <h1>Canadian work experience</h1>
          <SubspaceProvider
            mapState={state => state.withspouseWork}
            namespace="withspouseWork"
          >
            <TableForm
              headers={PartASource.WITHOUTSPOUSE_WORK_HEADER}
              rows={PartASource.WITHSPOUSE_WORK_DATA}
            />
          </SubspaceProvider>
        </Segment>
      </div>
    );
  }
}

export default connect(null, { select })(PartAwith);
