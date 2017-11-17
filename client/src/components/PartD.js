import React, { Component } from 'react';
import { SubspaceProvider } from 'react-redux-subspace';
import { Segment, Table } from 'semantic-ui-react';
import TableForm from './common/TableForm';
import PartDSource from './source/PartDSource';

class PartD extends Component {
  render() {
    return (
      <div className="partD" style={styles.containerStyle}>
        <Segment inverted color="orange">
          <h1> D. Additional points </h1>

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
                <Table.HeaderCell> Fair </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Points per factor
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  Brother or sister living in Canada (citizen or permanent
                  resident)
                </Table.Cell>
                <Table.Cell textAlign="center"> 15 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> French language skills </Table.Cell>
                <Table.Cell textAlign="center"> 30 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Post-secondary education in Canada </Table.Cell>
                <Table.Cell textAlign="center"> 30 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Arranged employment </Table.Cell>
                <Table.Cell textAlign="center"> 200 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> PN nomination </Table.Cell>
                <Table.Cell textAlign="center"> 600 </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>

        <Segment inverted color="black">
          <SubspaceProvider
            mapState={state => state.addtional}
            namespace="addtional"
          >
            <TableForm
              headers={PartDSource.ADDTIONAL_HEADER}
              rows={PartDSource.ADDITIONAL_DATA}
            />
          </SubspaceProvider>
        </Segment>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    position: 'absolute',
    marginLeft: '285px',
    marginTop: '45px',
    marginRight: '35px'
  }
};

export default PartD;
