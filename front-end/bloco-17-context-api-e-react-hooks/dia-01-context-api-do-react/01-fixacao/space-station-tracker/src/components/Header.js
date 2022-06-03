/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import Coordinates from './Coordinates';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          Space Station
          {' '}
          <span className="purple-font">Tracker</span>
        </h1>
        <Coordinates />
      </header>
    );
  }
}

export default Header;
