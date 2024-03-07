import React, { useState, useEffect } from 'react';
import './Favorites.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types'; 

const Favorites = ({ favs, removeFav }) => {

  const [selected, setSelected] = useState();

  const savedCards = favs.map(fact => {
    return <Card 
      stats={fact}
      name={fact.name}
      image={fact.image}
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
      {/* {selected ?? <Card} */}
    </section>
  );
};

export default Favorites;

Favorites.propTypes = {
  favs: PropTypes.array.isRequired,
  removeFav: PropTypes.func.isRequired
}