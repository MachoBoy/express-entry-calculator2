import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import shortid from 'shortid';

const dropdownMenu = ({ searchInput, options, placeholder }) => {
  return (
    <div>
      <Dropdown
        fluid
        selection
        searchInput={searchInput}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default dropdownMenu;
