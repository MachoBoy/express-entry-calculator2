import React, { Component } from 'react';

const MENU_TITLE = [
  { to: '/about', title: 'Express Entry' },
  { to: '/core', title: 'Core / human capital factors' },
  { to: '/spouse', title: 'Spouse or common-law partner factors' },
  { to: '/skill', title: 'Skill transferability factors' },
  { to: '/additional', title: 'Additional points' }
];

class Menu extends Component {
  render() {
    return (
      <div
        className="ui inverted vertical pointing menu"
        style={styles.MenuStyle}
      >
        <a class="item">Login</a>
        <a class="item">About</a>
        <a class="item">Core/human capital factors</a>
        <a class="item">Spouse or common law partner factors</a>
        <a class="item">Skill transferability factors</a>
        <a class="item">Additional Points</a>
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
