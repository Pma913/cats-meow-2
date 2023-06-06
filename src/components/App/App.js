import logo from '../../logo.svg';
import './App.css';
import React, { Component } from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Fact from '../Fact/Fact';
import { Route } from 'react-router-dom';

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
        <Route exact path="/" render={() => {
        return <Home />
        }} />
        <Route exact path="/fact" render={() => {
          return <Fact />
        }} />
        {/* {route facts comp here}
        {route favorites comp here}
        {route error comp here} */}
      </main>
    )
  }
}

export default App;
