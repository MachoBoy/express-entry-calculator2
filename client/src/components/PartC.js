import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';
import TableForm from './common/TableForm';
import PartCSource from './source/PartCSource';

class PartC extends Component {
  render() {
    return (
      <div className="partC" style={styles.containerStyle}>
        <Segment inverted color="orange">
          <h1> C. Skill Transferability factors </h1>

          <Table size="large" padded striped celled verticalAlign={'middle'}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> Education </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Points per factor
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  With good/strong official languages proficiency and a
                  post-secondary degree
                </Table.Cell>
                <Table.Cell textAlign="center"> 50 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  With Canadian work experience and a post-secondary degree
                </Table.Cell>
                <Table.Cell textAlign="center"> 50 </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table size="large" padded striped celled verticalAlign={'middle'}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> Foreign work experience </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Points per factor
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  With good/strong official languages proficiency (Canadian
                  Language Benchmark [CLB] level 7 or higher) and foreign work
                  experience
                </Table.Cell>
                <Table.Cell textAlign="center"> 50 </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  With Canadian work experience and foreign work experience
                </Table.Cell>
                <Table.Cell textAlign="center"> 50 </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table size="large" padded striped celled verticalAlign={'middle'}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  Certificate of qualification (for people in trade occupations)
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Points per factor
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  With good/strong official languages proficiency and a
                  certificate of qualification
                </Table.Cell>
                <Table.Cell textAlign="center"> 50 </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>

        <Segment inverted color="black">
          <h1>Education</h1>
          <TableForm
            headers={PartCSource.EDU_HEADER_1}
            rows={PartCSource.EDU_DATA}
          />
          <TableForm
            headers={PartCSource.EDU_HEADER_1}
            rows={PartCSource.EDU_DATA}
          />
        </Segment>

        <Segment inverted color="black">
          <h1>
            Foreign work experience – With good official language proficiency
          </h1>
          <TableForm
            headers={PartCSource.FWE_HEADER_1}
            rows={PartCSource.FWE_DATA}
          />
        </Segment>

        <Segment inverted color="black">
          <h1>Foreign work experience – With Canadian work experience</h1>
          <TableForm
            headers={PartCSource.FWE_HEADER_2}
            rows={PartCSource.EDU_DATA}
          />
        </Segment>
        <Segment inverted color="black">
          <TableForm
            headers={PartCSource.COQ_HEADER}
            rows={PartCSource.COQ_DATA}
          />
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

export default PartC;
