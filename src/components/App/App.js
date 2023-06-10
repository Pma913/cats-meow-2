import './App.css';
import React, { Component } from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Fact from '../Fact/Fact';
import { Route, Switch } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Error from '../Error/Error';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentFact: JSON.parse(sessionStorage.getItem('currentFact')) || {},
      favorites: JSON.parse(sessionStorage.getItem('allFavorites')) || [],
      err: ''
    }
  }

  getFact = (fact, id) => {
    if (!id) {
      this.setState({ err: 'Looks like there was a problem. Please try again later' })
    } else {
      this.setState({
        currentFact: {fact: fact, id: id}, favorites: this.state.favorites
      }, () => {
        sessionStorage.setItem('currentFact', JSON.stringify(this.state.currentFact))
    });
    }
  }

  favoriteFact = () => {
    const noDuplicate = this.state.favorites.every(fact => fact.id !== this.state.currentFact.id)
    
    if (noDuplicate) {
      this.setState({
        favorites: [...this.state.favorites, this.state.currentFact]
      }, () => {
        sessionStorage.setItem('allFavorites', JSON.stringify(this.state.favorites))
      });
    }
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

  removeErr = () => {
    this.setState({ err: '' })
  }

  render = () => {
    if (this.state.err) {
      return (
        <div className="error-page">
          <Error removeErr={this.removeErr} err={this.state.err} />
        </div>
      )
    } else {
      return (
        <main>
          <Header getFact={this.getFact}/>
          <Switch>
            <Route exact path="/" render={() => {
              return <Home getFact={this.getFact}/>
            }} />
            <Route exact path="/fact" render={() => {
              return <Fact favFact={this.favoriteFact} getFact={this.getFact} randFact={this.state.currentFact.fact}/>
            }} />
            <Route exact path="/favorites" render={() => {
              return <Favorites removeFav={this.removeFav} favs={this.state.favorites}/>
            }} />
            <Route exact path="/*" render={() => <Error removeErr={this.removeErr} err="Page does not exist" />} />
          </Switch>
        </main>
      )
    }
  }
}

export default App;
