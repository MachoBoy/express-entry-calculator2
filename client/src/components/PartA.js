import _ from 'lodash';
import React, { Component } from 'react';

const WITHSPOUSE_AGE_DATA = [
  { factor: '17 years of age or less', point: 0 },
  { factor: '18 years of age', point: 90 },
  { factor: '19 years of age', point: 95 },
  { factor: '20 to 29 years of age', point: 100 },
  { factor: '30 years of age', point: 95 },
  { factor: '31 years of age', point: 90 },
  { factor: '32 years of age', point: 85 },
  { factor: '33 years of age', point: 80 },
  { factor: '34 years of age', point: 75 },
  { factor: '35 years of age', point: 70 },
  { factor: '36 years of age', point: 65 },
  { factor: '37 years of age', point: 60 },
  { factor: '38 years of age', point: 55 },
  { factor: '39 years of age', point: 50 },
  { factor: '40 years of age', point: 45 },
  { factor: '41 years of age', point: 35 },
  { factor: '42 years of age', point: 25 },
  { factor: '43 years of age', point: 15 },
  { factor: '44 years of age', point: 5 },
  { factor: '45 years of age or more', point: 0 }
];

class PartA extends Component {
  renderDropdown() {
    return (
      <div className="partA" style={styles.containerStyle}>
        <div className="ui fluid selection dropdown">
          <i className="dropdown icon" />
          <div className="default text">Select Age</div>
          <div className="menu">
            {_.map(WITHSPOUSE_AGE_DATA, ({ factor, point }) => {
              <div className="item" data-value={point}>
                {factor}
              </div>;
            })}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderDropdown()}</div>;
  }
}

const styles = {
  containerStyle: {
    top: '0',
    bottom: '0',
    marginLeft: '270px'
  }
};

export default PartA;
