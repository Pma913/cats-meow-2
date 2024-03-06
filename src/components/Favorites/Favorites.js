import React from 'react';
import './Favorites.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types'; 

const Favorites = ({ favs, removeFav }) => {
  console.log(favs, 'favorites')
  const savedCards = favs.map(fact => {
    return <Card 
      name={fact.name}
      image={fact.image}
      id={fact.id}
      key={fact.id}
      removeFav={removeFav}
    />
  })
    console.log(savedCards.length, 'savedcards length')
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