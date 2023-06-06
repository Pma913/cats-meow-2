import logo from '../../logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render = () => {
    return (
      <main>
        <h1>header comp here</h1>
        <h1>home comp here</h1>
        <h1>route facts comp here</h1>
        <h1>route favorites comp here</h1>
        <h1>route error comp here</h1>
      </main>
    )
  }
}

export default App;
