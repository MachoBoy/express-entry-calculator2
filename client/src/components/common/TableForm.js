import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class TableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  renderTable = ({ headers, rows }) => {
    return (
      <Table
        size="large"
        padded
        striped
        celled
        verticalAlign="middle"
        headerRow={headers}
        tableData={rows}
      />
    );
  };
  render() {
    const { headers, rows } = this.props;
    return <div> {this.renderTable(headers, rows)} </div>;
  }
}

export default TableForm;
