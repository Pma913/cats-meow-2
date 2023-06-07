import logo from '../../logo.svg';
import './App.css';
import React, { Component } from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Fact from '../Fact/Fact';
import { Route } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentFact: {},
      favorites: JSON.parse(sessionStorage.getItem('allFavorites')) || []
    }
  }

  getFact = (fact, id) => {
    this.setState({
      currentFact: {fact: fact, id: id}, favorites: this.state.favorites
      });
  }

  favoriteFact = () => {
    this.setState({
        favorites: [...this.state.favorites, this.state.currentFact]
      }, () => {
        sessionStorage.setItem('allFavorites', JSON.stringify(this.state.favorites))
      });
  }

  removeFav = (id) => {
    sessionStorage.removeItem('allFavorites')
    const newFavs = this.state.favorites.filter(fact => fact.id !== id)
     this.setState({
        favorites: newFavs
      }, () => {
        sessionStorage.setItem('allFavorites', JSON.stringify(this.state.favorites))
      });
  }

  render = () => {
    return (
      <main>
        <Header />
        <Route exact path="/" render={() => {
          return <Home getFact={this.getFact}/>
        }} />
        <Route exact path="/fact" render={() => {
          return <Fact favFact={this.favoriteFact} getFact={this.getFact} randFact={this.state.currentFact.fact}/>
        }} />
        <Route exact path="/favorites" render={() => {
          return <Favorites removeFav={this.removeFav} favs={this.state.favorites}/>
        }} />
        {/* 
        {route favorites comp here}
        {route error comp here} */}
      </main>
    )
  }
}

export default App;
