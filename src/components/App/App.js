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
      currentFact: {},
      favorites: []
    }
  }

  getFact = (fact, id) => {
    this.setState({ currentFact: {fact: fact, id: id}, favorites: this.state.favorites })
  }

  render = () => {
    return (
      <main>
        <Header />
        <Route exact path="/" render={() => {
        return <Home getFact={this.getFact}/>
        }} />
        <Route exact path="/fact" render={() => {
          return <Fact randFact={this.state.currentFact.fact}/>
        }} />
        {/* {route facts comp here}
        {route favorites comp here}
        {route error comp here} */}
      </main>
    )
  }
}

export default App;
