import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const dropdownMenu = ({ searchInput, selection, options, placeholder }) => {
  return (
    <div>
      <Dropdown
        fluid
        searchInput={searchInput}
        selection={selection}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default dropdownMenu;
