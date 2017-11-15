import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';

class PartB extends Component {
  render() {
    return (
      <div className="partB" style={styles.containerStyle}>
        <Segment inverted color="orange">
          <h1> B. Spouse or common-law partner factors (if applicable) </h1>

          <Table size="large" padded striped celled verticalAlign={'middle'}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> Factor </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Points per factor
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell> Level of education </Table.Cell>
                <Table.Cell textAlign="center"> 10 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Official language proficiency </Table.Cell>
                <Table.Cell textAlign="center"> 20 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Canadian Work Experience </Table.Cell>
                <Table.Cell textAlign="center"> 10 </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>

        <Segment inverted color="black">
          <h1>Level of Education</h1>
        </Segment>

        <Segment inverted color="black">
          <h1>Official languages proficiency - first official language</h1>
        </Segment>

        <Segment inverted color="black">
          <h1>Canadian work experience</h1>
        </Segment>
      </div>
    );
  }
}
const styles = {
  containerStyle: {
    position: 'absolute',
    marginLeft: '285px',
    marginTop: '45px'
  }
};

export default PartB;