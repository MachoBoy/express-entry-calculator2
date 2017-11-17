import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const dropdownMenu = ({ options, placeholder, value, onClick }) => {
  return (
    <div>
      <Dropdown
        fluid
        selection
        options={options}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
      />
    </div>
  );
};

export default dropdownMenu;
