import React, { Component } from 'react';
import {
  Button,
  Form,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';

class Login extends Component {
  componentWillMount() {
    document.body.style.background = '#ffc966';
  }
  componentWillUnmount() {
    document.body.style.background = null;
  }

  render() {
    return (
      <div className="login" style={styles.containerStyle}>
        <Form size="large">
          <Segment stacked>
            <Header as="h2" color="green" textAlign="center">
              Log-in to your account
            </Header>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="green" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
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
  }
};

export default Login;
