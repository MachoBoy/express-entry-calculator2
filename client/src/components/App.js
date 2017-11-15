import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import About from './About';
import Menu from './SideMenu';
import PartA from './PartA';
import PartB from './PartB';
import PartC from './PartC';
import PartD from './PartD';

class App extends Component {
  render() {
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
            <Route exact path="/additional" component={PartD} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
