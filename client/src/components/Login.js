import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Header, Message, Segment } from 'semantic-ui-react';
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

  onSubmit() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  // renderButton() {
  //   if (this.props.loading) {
  //     return (
  //       <Button loading primary>
  //         loading
  //       </Button>
  //     );
  //   }
  //   return (
  //     <Button color="green" fluid size="large" onClick={this.onSubmit}>
  //       Login
  //     </Button>
  //   );
  // }

  render() {
    return (
      <div className="login" style={styles.containerStyle}>
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
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={this.onPasswordChange.bind(this)}
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
          <Message> Don't have account with us? </Message>
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    position: 'relative',
    display: 'block',
    margin: 'auto',
    width: '500px',
    marginLeft: '285px',
    marginTop: '45px'
  },
  messageStyle: {
    position: 'relative',
    left: 0
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  loginUser,
  getEmail,
  getPassword
})(Login);
