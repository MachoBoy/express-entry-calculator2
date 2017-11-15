import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import shortid from 'shortid';

class TableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  renderTable = (headers, rows) => {
    const customRenderBodyRow = ({ text, value, value2 }, index) => ({
      key: shortid.generate(),
      cells: [
        <Table.Cell content={text || 'N/A'} key={shortid.generate()} />,
        <Table.Cell
          key={shortid.generate()}
          content={value || 'N/A'}
          textAlign={'center'}
          selectable
        />,
        <Table.Cell
          key={shortid.generate()}
          content={value2 || 'N/A'}
          textAlign={'center'}
          selectable
        />
      ]
    });
    return (
      <Table
        size="large"
        padded
        striped
        celled
        verticalAlign="middle"
        headerRow={headers}
        renderBodyRow={customRenderBodyRow}
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
