import logo from '../../logo.svg';
import './App.css';
import React, { Component } from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render = () => {
    return (
      <main>
        <Header />
        <Home />
        {/* {route facts comp here}
        {route favorites comp here}
        {route error comp here} */}
      </main>
    )
  }
}

export default App;
