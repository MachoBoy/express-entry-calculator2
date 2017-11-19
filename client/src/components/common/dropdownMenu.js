import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const dropdownMenu = ({ options, placeholder, value, onChange }) => {
  return (
    <div>
      <Dropdown
        fluid
        selection
        value={value}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default dropdownMenu;
