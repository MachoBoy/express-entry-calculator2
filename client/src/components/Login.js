import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  Header,
  Message,
  Segment,
  Icon,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import { loginUser, getEmail, getPassword } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    document.body.style.background = '#ffc966';
  }

  componentWillUnmount() {
    document.body.style.background = null;
  }

  onEmailChange(event, data) {
    event.preventDefault();
    this.props.getEmail(data.value);
  }

  onPasswordChange(event, data) {
    event.preventDefault();
    this.props.getPassword(data.value);
  }

  //login user
  onSubmit() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  //render error message
  renderErrorMessage(error) {
    if (error) {
      return (
        <div className="authError">
          <Message negative>
            <Icon name="warning circle" />
            {this.props.error}
          </Message>
        </div>
      );
    }
  }

  render() {
    if (this.props.user) {
      return (
        <div>
          <Dimmer active>
            <Loader />
          </Dimmer>
          <Redirect to="/about" />;
        </div>
      );
    }
    return (
      <div className="login" style={styles.containerStyle}>
        {this.renderErrorMessage(this.props.error)}
        <Form size="large">
          <Segment stacked>
            <Header as="h2" color="green" textAlign="center">
              Log in to your account
            </Header>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
            {this.props.loading ? (
              <Button loading primary fluid size="large">
                loading
              </Button>
            ) : (
              <Button color="green" fluid size="large" onClick={this.onSubmit}>
                Login
              </Button>
            )}
          </Segment>
        </Form>
        <div className="Message">
          <Message color="teal" style={styles.messageStyle}>
            <div className="welcomescript" style={styles.scriptStyle}>
              <Icon
                style={styles.iconStyle}
                name="id card"
                size="massive"
                color="green"
              />
              <h2>Don't have account with us?</h2>
              <h3>Please provide email and password</h3>
              <h3>we will handle the rest</h3>
            </div>
          </Message>
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    position: 'fixed',
    display: 'block',
    margin: 'auto',
    width: '500px',
    marginLeft: '285px',
    marginTop: '45px'
  },
  messageStyle: {
    position: 'fixed',
    display: 'flex',
    height: '100%',
    right: '0',
    bottom: '0'
  },
  iconStyle: {
    display: 'block',
    right: '0',
    left: '0'
  },
  scriptStyle: {
    position: 'relative',
    display: 'block',
    margin: 'auto'
  },
  errorMessageStyle: {}
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, user } = auth;
  return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {
  loginUser,
  getEmail,
  getPassword
})(Login);
