import React, { Component } from 'react';

class PartA extends Component {
  render() {
    return (
      <div className="partA">
        <div className="ui fluid selection dropdown">
          <div className="menu">
            <div className="item" data-value="af">
              <i className="af flag" />Afghanistan
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartA;
