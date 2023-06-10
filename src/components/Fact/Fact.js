import React from 'react';
import './Fact.css';
import getCatFacts from '../../utilities/api-call';
import PropTypes from 'prop-types'; 

const Fact = ({ randFact, favFact, getFact }) => {
  return (
    <section className="fact-page">
      <div className="fact-display">
        <p className="fact">{randFact ?? "> Click the New Fact button to view a cat fact <"}</p>
        <img className="fact-img" src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib
        =rb-4.0.3&ixid
        =M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx
        8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt="Cat with butterfly on nose" />
      </div>
      <div className="button-container">
        <button className="fav-card-btn" onClick={() => {
          favFact()
        }}>Favorite</button>

        <button className="new-fact-btn" onClick={() => {
          getCatFacts('https://catfact.ninja/fact')
        .then(data => {
          const id = Date.now();
          getFact(data.fact,  id);
        })
        .catch(err => {
          getFact(err);
          console.log(err.message);
        })
        }}>New Fact</button>
      </div>
    </section>
  )
};

export default Fact;

Fact.propTypes = {
  randFact: PropTypes.string,
  favFact: PropTypes.func.isRequired,
  getFact: PropTypes.func.isRequired
}