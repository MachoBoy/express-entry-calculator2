import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Table } from 'semantic-ui-react';
import { SubspaceProvider } from 'react-redux-subspace';
import DropdownMenu from './common/dropdownMenu';
import TableForm from './common/TableForm';
import PartASource from './source/PartASource';
import PartCSource from './source/PartCSource';
import PartDSource from './source/PartDSource';
import { select } from '../actions';

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
            mapState={state => state.AwithoutspouseAge}
            namespace="AwithoutspouseAge"
          >
            <DropdownMenu
              placeholder="Select Age"
              options={PartASource.WITHOUTSPOUSE_AGE_DATA}
              value={PartASource.WITHOUTSPOUSE_AGE_DATA.value}
              onChange={(e, { value }) => this.props.select(value)}
            />
          </SubspaceProvider>
        </Segment>

        <Segment inverted color="black">
          <h1>Level of Education</h1>
          <SubspaceProvider
            mapState={state => state.AwithoutspouseEdu}
            namespace="AwithoutspouseEdu"
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
            mapState={state => state.AwithoutspouseLangFirst}
            namespace="AwithoutspouseLangFirst"
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
            mapState={state => state.AwithoutspouseLangSecond}
            namespace="AwithoutspouseLangSecond"
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
            mapState={state => state.AwithoutspouseWork}
            namespace="AwithoutspouseWork"
          >
            <TableForm
              headers={PartASource.WITHOUTSPOUSE_WORK_HEADER}
              rows={PartASource.WITHOUTSPOUSE_WORK_DATA}
            />
          </SubspaceProvider>
        </Segment>
        <div className="partC">
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
                    Certificate of qualification (for people in trade
                    occupations)
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
            <SubspaceProvider
              mapState={state => state.CwithoutspouseEdu_1}
              namespace="CwithoutspouseEdu_1"
            >
              <TableForm
                headers={PartCSource.EDU_HEADER_1}
                rows={PartCSource.EDU_DATA}
              />
            </SubspaceProvider>

            <SubspaceProvider
              mapState={state => state.CwithoutspouseEdu_2}
              namespace="CwithoutspouseEdu_2"
            >
              <TableForm
                headers={PartCSource.EDU_HEADER_2}
                rows={PartCSource.EDU_DATA}
              />
            </SubspaceProvider>
          </Segment>

          <Segment inverted color="black">
            <h1>
              Foreign work experience – With good official language proficiency
              (Canadian Language Benchmark Level [CLB] 7 or higher)
            </h1>
            <SubspaceProvider
              mapState={state => state.CwithoutspouseForeignLang_1}
              namespace="CwithoutspouseForeignLang_1"
            >
              <TableForm
                headers={PartCSource.FWE_HEADER_1}
                rows={PartCSource.FWE_DATA}
              />
            </SubspaceProvider>
          </Segment>

          <Segment inverted color="black">
            <h1>Foreign work experience – With Canadian work experience</h1>
            <SubspaceProvider
              mapState={state => state.CwithoutspouseForeignLang_2}
              namespace="CwithoutspouseForeignLang_2"
            >
              <TableForm
                headers={PartCSource.FWE_HEADER_2}
                rows={PartCSource.EDU_DATA}
              />
            </SubspaceProvider>
          </Segment>
          <Segment inverted color="black">
            <SubspaceProvider
              mapState={state => state.CwithoutspouseCertificate}
              namespace="CwithoutspouseCertificate"
            >
              <TableForm
                headers={PartCSource.COQ_HEADER}
                rows={PartCSource.COQ_DATA}
              />
            </SubspaceProvider>
          </Segment>
        </div>
        <div className="partD">
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
              mapState={state => state.DwithoutspouseAdditional}
              namespace="DwithoutspouseAdditional"
            >
              <TableForm
                headers={PartDSource.ADDTIONAL_HEADER}
                rows={PartDSource.ADDITIONAL_DATA}
              />
            </SubspaceProvider>
          </Segment>
        </div>
      </div>
    );
  }
}

export default connect(null, { select })(PartAwithout);
