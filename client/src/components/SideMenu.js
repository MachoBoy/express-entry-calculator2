import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Loader, Dimmer } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/authAction';
import PointsIndicator from './common/pointIndicator';

const MENU_TITLE = [
  { to: '/', title: 'Login' },
  { to: '/about', title: 'About' },
  { to: '/form', title: 'CRS' }
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
    const {
      withSpouseAgePoint,
      withSpouseEduPoint,
      withSpouseLangPoint_1,
      withSpouseLangPoint_2,
      withSpouseWorkPoint,
      BwithSpouseEduPoint,
      BwithSpouseWorkPoint,
      CwithspouseEduPoint_1,
      CwithspouseEduPoint_2,
      CwithspouseForeignLangPoint_1,
      CwithspouseForeignLangPoint_2,
      CwithspouseCertificatePoint,
      DwithspouseAdditionalPoint,

      // withoutspouse
      withoutSpouseAgePoint,
      withoutSpouseEduPoint,
      withoutSpouseLangPoint,
      withoutSpouseLang2Point,
      withoutSpouseWorkPoint,
      CwithoutspouseEduPoint_1,
      CwithoutspouseEduPoint_2,
      CwithoutspouseForeignLangPoint_1,
      CwithoutspouseForeignLangPoint_2,
      CwithoutspouseCertificatePoint,
      DwithoutspouseAdditionalPoint
    } = this.props;

    const withSpousePointsArray = [
      withSpouseAgePoint,
      withSpouseEduPoint,
      withSpouseLangPoint_1,
      withSpouseLangPoint_2,
      withSpouseWorkPoint,
      BwithSpouseEduPoint,
      BwithSpouseWorkPoint,
      CwithspouseEduPoint_1,
      CwithspouseEduPoint_2,
      CwithspouseForeignLangPoint_1,
      CwithspouseForeignLangPoint_2,
      CwithspouseCertificatePoint,
      DwithspouseAdditionalPoint
    ];

    const withoutSpousePointsArray = [
      withoutSpouseAgePoint,
      withoutSpouseEduPoint,
      withoutSpouseLangPoint,
      withoutSpouseLang2Point,
      withoutSpouseWorkPoint,
      CwithoutspouseEduPoint_1,
      CwithoutspouseEduPoint_2,
      CwithoutspouseForeignLangPoint_1,
      CwithoutspouseForeignLangPoint_2,
      CwithoutspouseCertificatePoint,
      DwithoutspouseAdditionalPoint
    ];

    const withoutSpouseTotal = withoutSpousePointsArray
      .map(points => points.point)
      .reduce((acc, curr) => acc + parseInt(curr, 10), 0);

    const withSpouseTotal = withSpousePointsArray
      .map(points => points.point)
      .reduce((acc, curr) => acc + parseInt(curr, 10), 0);

    return (
      <div className="menu">
        <Menu pointing vertical inverted style={styles.menuStyle}>
          <Menu.Item header style={{ marginBottom: '50px' }}>
            Express Entry Calculator
            <Icon name="calculator" size={'huge'} color={'green'} />
          </Menu.Item>
          <Menu.Item key="123242" />

          {this.renderMenu()}
          <div className="pointsIndicator" style={styles.pointStyle}>
            {this.props.tab === 1 ? (
              <PointsIndicator
                color="green"
                value={withSpouseTotal}
                label="Points"
              />
            ) : (
              <PointsIndicator
                color="orange"
                value={withoutSpouseTotal}
                label="Points"
              />
            )}
          </div>
        </Menu>
      </div>
    );
  }
}

const styles = {
  menuStyle: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    width: '270px'
  },
  pointStyle: {
    marginTop: '20px',
    marginLeft: '95px'
  }
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loading: state.auth.loading,
    tab: state.tab.point,
    // withspouse A
    withSpouseAgePoint: state.AwithspouseAge,
    withSpouseEduPoint: state.AwithspouseEdu,
    withSpouseLangPoint_1: state.AwithspouseLangFirst,
    withSpouseLangPoint_2: state.AwithspouseLangSecond,
    withSpouseWorkPoint: state.AwithspouseWork,
    // withspouse B
    BwithSpouseEduPoint: state.BwithspouseEdu,
    BwithSpouseLangPoint: state.BwithspouseLang,
    BwithSpouseWorkPoint: state.BwithspouseWork,
    // withspouse C
    CwithspouseEduPoint_1: state.CwithspouseEdu_1,
    CwithspouseEduPoint_2: state.CwithspouseEdu_2,
    CwithspouseForeignLangPoint_1: state.CwithspouseForeignLang_1,
    CwithspouseForeignLangPoint_2: state.CwithspouseForeignLang_2,
    CwithspouseCertificatePoint: state.CwithspouseCertificate,
    // withspouse D
    DwithspouseAdditionalPoint: state.DwithspouseAdditional,

    // withoutspouse A
    withoutSpouseAgePoint: state.AwithoutspouseAge,
    withoutSpouseEduPoint: state.AwithoutspouseEdu,
    withoutSpouseLangPoint: state.AwithoutspouseLangFirst,
    withoutSpouseLang2Point: state.AwithoutspouseLangSecond,
    withoutSpouseWorkPoint: state.AwithoutspouseWork,
    // withspouse C
    CwithoutspouseEduPoint_1: state.CwithoutspouseEdu_1,
    CwithoutspouseEduPoint_2: state.CwithoutspouseEdu_2,
    CwithoutspouseForeignLangPoint_1: state.CwithoutspouseForeignLang_1,
    CwithoutspouseForeignLangPoint_2: state.CwithoutspouseForeignLang_2,
    CwithoutspouseCertificatePoint: state.CwithoutspouseCertificate,
    // withspouse D
    DwithoutspouseAdditionalPoint: state.DwithoutspouseAdditional
  };
};

export default connect(mapStateToProps, { logoutUser })(SideMenu);
