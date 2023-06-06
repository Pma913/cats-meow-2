import React, { Component } from 'react';
import './Fact.css';

class Fact extends Component {
  constructor() {
    super();
    this.state = {
      fact: {}
    }
  };

  render = () => {
    return (
      <section className="fact-page">
        <div className="fact-display">
          <p className="fact"></p>
          <img className="fact-img" src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib
          =rb-4.0.3&ixid
          =M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx
          8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Cat with butterfly on nose" />
        </div>
        <div className="button-container">
          <button className="fav-card-btn">Favorite</button>
          <button className="new-fact-btn">New Fact</button>
        </div>
      </section>
    )
  }
};

export default Fact;