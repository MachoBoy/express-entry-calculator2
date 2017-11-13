import React from 'react';

const About = () => {
  return (
    <div className="container" style={styles.containerStyle}>
      <div className="ui segment">
        <div className="ui green segment">
          <h2>Express Entry</h2>
          <p>
            Express Entry is an immigration system which selects skilled workers
            to Canada under Federal Economic programs.
          </p>
          <p>Applicants submit an online profile to the Express Entry Pool.</p>
          <p>
            Canadian employers and provincial governments across Canada access
            the best candidates who are invited by the Federal government to
            apply for Canadian permanent residence.
          </p>

          <p>
            For more Information, please visit &nbsp;
            <a href="http://www.cic.gc.ca/english/express-entry/grid-crs.asp">
              here
            </a>
          </p>
        </div>
        <div className="ui orange segment">
          <h2>Express Entry Calculator</h2>
          <p>
            This tool will help you calculate your Comprehensive Ranking System
            (CRS) score based on the answers you provide. The CRS is a
            points-based system.
          </p>
          <p>There are 4 parts of section</p>
          <ul>
            <li>Skills and experience factors</li>
            <li>
              Spouse or common-law partner factors, such as their language
              skills and education
            </li>
            <li>
              Skills transferability, including education and work experience
            </li>
            <li>Additional: Up to 600 points for:</li>
            <ul>
              <li>Canadian degrees, diplomas or certificates</li>
              <li>a valid job offer</li>
              <li>a nomination from a province or territory</li>
              <li>
                a brother or sister living in Canada who is a citizen or
                permanent residen
              </li>
              <li>strong French language skills</li>
            </ul>
          </ul>
          <div className="summaryTable">
            <h3> Core Points + Additional Points = Your Total Score</h3>
            <table className="ui striped table">
              <thead>
                <tr className="center aligned">
                  <th>Single candidates </th>
                  <th>With a spouse or common-law partner</th>
                </tr>
              </thead>
              <tbody className="center aligned">
                <tr>
                  <td>1. Skills and experience factors (maximum 500)</td>
                  <td>1. Skills and experience factors (maximum 460)</td>
                </tr>
                <tr>
                  <td>N/A</td>
                  <td>2. Spouse or common-law partner factors (maximum 40)</td>
                </tr>
                <tr>
                  <td>3. Skill transferability factors (maximum 100)</td>
                  <td>3. Skill transferability factors (maximum 100)</td>
                </tr>
                <tr>
                  <td>4. points (maximum 600)</td>
                  <td>4. points (maximum 600)</td>
                </tr>
              </tbody>
            </table>
            <div className="ui inverted segment">
              Developed by Machoboy 2017 &nbsp;&nbsp;
              <i className="large link mail outline icon" />
              <i className="large link github icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  containerStyle: {
    top: '0',
    bottom: '0',
    marginLeft: '270px'
  }
};

export default About;
