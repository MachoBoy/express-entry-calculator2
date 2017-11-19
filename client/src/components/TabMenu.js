import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import PartAwith from './PartAwith';
import PartAwithout from './PartAwithout';

class TabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange = (e, { activeIndex }) => {
    this.setState({ activeIndex });
  };

  render() {
    const PANE = [
      {
        menuItem: 'Without a spouse or common-law partner',
        render: () => (
          <Tab.Pane attached={false}>
            <PartAwithout />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'With a spouse or common-law partner',
        render: () => (
          <Tab.Pane attached={false}>
            <PartAwith />
          </Tab.Pane>
        )
      }
    ];
    return (
      <div style={styles.containerStyle}>
        <Tab
          menu={{ color: 'green', attached: false }}
          panes={PANE}
          activeIndex={this.state.activeIndex}
          renderActiveOnly={true}
          onTabChange={this.handleTabChange}
        />
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    position: 'relative',
    marginLeft: '270px',
    bottom: '0'
  }
};

export default TabMenu;
