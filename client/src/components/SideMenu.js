import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Loader, Dimmer } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/authAction';

const MENU_TITLE = [
  { to: '/', title: 'Login' },
  { to: '/about', title: 'About' },
  { to: '/core', title: 'Core / human capital factors' },
  { to: '/spouse', title: 'Spouse or common-law partner factors' },
  { to: '/skill', title: 'Skill transferability factors' },
  { to: '/additional', title: 'Additional points' }
];

const LOGOUT = { to: '', title: 'Logout', lg: 'lg' };

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.onMenuClick = this.onMenuClick.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  onMenuClick(index, trigger) {
    this.setState({ activeIndex: index });
    if (trigger) {
      this.props.logout();
    }
  }

  renderMenu() {
    const { user, loading } = this.props;
    if (user) {
      const removeLogin = _.drop(MENU_TITLE, 1);
      const logoutMenu = _.concat(removeLogin, LOGOUT);
      return _.map(logoutMenu, ({ to, title, lg }, index) => {
        return (
          <Menu.Item
            key={title}
            active={this.state.activeIndex === index}
            as={Link}
            to={to}
            children={title}
            onClick={() => this.onMenuClick(index, lg)}
          />
        );
      });
    }
    if (loading === true) {
      return (
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }
    return _.map(MENU_TITLE, ({ to, title }, index) => {
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
    console.log(this.props);

    return (
      <div className="menu">
        <Menu pointing vertical inverted style={styles.MenuStyle}>
          <Menu.Item header style={{ marginBottom: '50px' }}>
            Express Entry Calculator
            <Icon name="calculator" size={'huge'} color={'green'} />
          </Menu.Item>
          <Menu.Item key="123242" />

          {this.renderMenu()}
        </Menu>
      </div>
    );
  }
}

const styles = {
  MenuStyle: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    width: '270px'
  }
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loading: state.auth.loading,
    // core withSpouse states
    withSpouseAgePoint: state.withspouseAge,
    withSpouseEduPoint: state.withspouseEdu,
    withSpouseLangPoint: state.withspouseLangFirst,
    withSpouseLang2Point: state.withspouseLangSecond,
    withSpouseWorkPoint: state.withspouseWork,
    // core withoutSpouse
    withoutSpouseAgePoint: state.withoutspouseAge,
    withoutSpouseEduPoint: state.withoutspouseEdu,
    withoutSpouseLangPoint: state.withoutspouseLangFirst,
    withoutSpouseLang2Point: state.withoutspouseLangSecond,
    withoutSpouseWorkPoint: state.withoutspouseWork,
    // Spouse factor
    BwithSpouseEduPoint: state.BwithspouseEdu,
    BwithSpouseLangPoint: state.BwithspouseLang,
    BwithSpouseWorkPoint: state.BwithspouseWork,
    // skill transferability factors
    CEdu_1Point: state.CEdu_1,
    CEdu_2Point: state.CEdu_2,
    CForeignLang_1Point: state.CForeignLang_1,
    CForeignLang_2Point: state.CForeignLang_2,
    certificatePoint: state.certificate,
    // Additional
    additionalPoint: state.additional
  };
};

export default connect(mapStateToProps, { logoutUser })(SideMenu);
