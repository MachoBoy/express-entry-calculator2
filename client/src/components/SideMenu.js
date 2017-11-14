import _ from 'lodash';
import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MENU_TITLE = [
  { to: '/login', title: 'Login' },
  { to: '/about', title: 'About' },
  { to: '/core', title: 'Core / human capital factors' },
  { to: '/spouse', title: 'Spouse or common-law partner factors' },
  { to: '/skill', title: 'Skill transferability factors' },
  { to: '/additional', title: 'Additional points' }
];

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  onMenuClick(index) {
    this.setState({ activeIndex: index });
  }

  renderMenu() {
    return _.map(MENU_TITLE, ({ to, title, index }) => {
      console.log(index);
      return (
        <Menu.Item
          key={title}
          active={this.state.activeIndex === index}
          as={Link}
          to={to}
          children={title}
          onClick={() => this.onMenuClick(index)}
        />
      );
    });
  }

  render() {
    return (
      <div className="menu">
        <Menu pointing vertical inverted style={styles.MenuStyle}>
          <Menu.Item header style={{ marginBottom: '50px' }}>
            Express Entry Calculator
            <Icon name="calculator" size={'huge'} color={'green'} />
          </Menu.Item>
          {this.renderMenu()}
        </Menu>
      </div>
    );
  }
}

const styles = {
  MenuStyle: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    width: '270px'
  }
};

export default SideMenu;
