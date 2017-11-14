import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

const WITHSPOUSE_AGE_DATA = [
  { text: '17 years of age or less', value: 0 },
  { text: '18 years of age', value: 90 },
  { text: '19 years of age', value: 95 },
  { text: '20 to 29 years of age', value: 100 },
  { text: '30 years of age', value: 95 },
  { text: '31 years of age', value: 90 },
  { text: '32 years of age', value: 85 },
  { text: '33 years of age', value: 80 },
  { text: '34 years of age', value: 75 },
  { text: '35 years of age', value: 70 },
  { text: '36 years of age', value: 65 },
  { text: '37 years of age', value: 60 },
  { text: '38 years of age', value: 55 },
  { text: '39 years of age', value: 50 },
  { text: '40 years of age', value: 45 },
  { text: '41 years of age', value: 35 },
  { text: '42 years of age', value: 25 },
  { text: '43 years of age', value: 15 },
  { text: '44 years of age', value: 5 },
  { text: '45 years of age or more', value: 0 }
];

class PartAwith extends Component {
  renderDropdown() {
    return (
      <div>
        <Dropdown
          searchInput={{ type: 'number' }}
          selection
          options={WITHSPOUSE_AGE_DATA}
          placeholder="Select Age"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="partA" style={styles.containerStyle}>
        {this.renderDropdown()}
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    position: 'absolute',
    marginLeft: '270px'
  }
};

export default PartAwith;
