import React, { Component } from 'react';
import Header from './Header.js';
import Body from './Body.js';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;