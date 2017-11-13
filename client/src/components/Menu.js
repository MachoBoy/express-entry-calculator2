import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MENU_TITLE = [
  { to: '/login', title: 'Login' },
  { to: '/about', title: 'About' },
  { to: '/core', title: 'Core / human capital factors' },
  { to: '/spouse', title: 'Spouse or common-law partner factors' },
  { to: '/skill', title: 'Skill transferability factors' },
  { to: '/additional', title: 'Additional points' }
];

class Menu extends Component {
  renderMenu() {
    return _.map(MENU_TITLE, ({ to, title }) => {
      return (
        <Link className="item" to={to}>
          {title}
        </Link>
      );
    });
  }

  render() {
    return (
      <div
        className="ui inverted vertical pointing menu"
        style={styles.MenuStyle}
      >
        <Link to="/">
          <h3 className="green">Express Entry Calculator</h3>
          <i className="huge calculator icon green" />
        </Link>
        {this.renderMenu()}
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

export default Menu;
