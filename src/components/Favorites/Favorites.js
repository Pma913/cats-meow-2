import React from 'react';
import './Favorites.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types'; 

const Favorites = ({ favs, removeFav }) => {
  const savedCards = favs.map(fact => {
    return <Card 
      description={fact.fact}
      id={fact.id}
      key={fact.id}
      removeFav={removeFav}
    />
  })
    
  return (
    <section className="fav-card-display">
      {!savedCards.length ? 
      <h2 className="no-ideas">No saved ideas yet</h2> :
      savedCards}
    </section>
  );
};

export default Favorites;

Favorites.propTypes = {
  favs: PropTypes.array.isRequired,
  removeFav: PropTypes.func.isRequired
}