import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import shortid from 'shortid';
import { select } from '../../actions';

class TableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      activeIndex2: 0
    };
    this.isCellActive = this.isCellActive.bind(this);
    this.isCellActive2 = this.isCellActive2.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  isCellActive(index) {
    this.setState({ activeIndex: index });
  }

  isCellActive2(index) {
    this.setState({ activeIndex2: index });
  }

  handleOnClick(index, value, secondCell) {
    switch (secondCell) {
      case 'secondCell':
        this.isCellActive2(index);
        this.props.onSelection(value);
        break;
      default:
        this.isCellActive(index);
        this.props.onSelection(value);
        break;
    }
  }

  renderTable = (headers, rows) => {
    const { activeIndex, activeIndex2 } = this.state;
    const customRenderBodyRow = ({ text, value, value2 }, index) => ({
      key: shortid.generate(),
      cells: [
        <Table.Cell content={text || 'N/A'} key={shortid.generate()} />,
        <Table.Cell
          key={shortid.generate()}
          active={index === activeIndex}
          content={value || null}
          textAlign={'center'}
          selectable
          onClick={() => this.handleOnClick(index, value)}
        />,
        <Table.Cell
          key={shortid.generate()}
          active={index === activeIndex2}
          content={value2 || null}
          textAlign={'center'}
          selectable
          onClick={() => this.handleOnClick(index, value2, 'secondCell')}
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

const mapDispatchToProps = dispatch => {
  return {
    onSelection: point => {
      dispatch(select(point));
    }
  };
};

export default connect(null, mapDispatchToProps)(TableForm);
