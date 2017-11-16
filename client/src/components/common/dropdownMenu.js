import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const dropdownMenu = ({ options, placeholder, value }) => {
  return (
    <div>
      <Dropdown
        fluid
        selection
        options={options}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default dropdownMenu;
