import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import PartA from './PartA';

class App extends Component {
  render() {
    const Login = () => <div>Login</div>;
    const PartB = () => <div>PartB</div>;
    const PartC = () => <div>PartC</div>;
    const PartD = () => <div>PartD</div>;
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Menu />
            <Route exact path="/" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/core" component={PartA} />
            <Route exact path="/spouse" component={PartB} />
            <Route exact path="/skill" component={PartC} />
            <Route exact path="/addtional" component={PartD} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
