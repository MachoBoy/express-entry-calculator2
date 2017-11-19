import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import About from './About';
import Menu from './SideMenu';
import TabMenu from './TabMenu';
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
            <Route exact path="/form" component={TabMenu} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
