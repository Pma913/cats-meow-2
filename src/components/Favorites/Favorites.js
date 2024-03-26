import React, { useState, useEffect } from 'react';
import './Favorites.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types'; 
import ExpandedCard from '../ExpandedCard/ExpandedCard';

const Favorites = ({ favs, removeFav }) => {

  const [selected, setSelected] = useState(undefined);

  const selectCard = (card) => {
    setSelected(card)
  }

  const deselectCard = () => {
    setSelected(undefined)
  }

  const savedCards = favs.map(fact => {
    return <Card 
      stats={fact}
      name={fact.name}
      image={fact.image}
      id={fact.id}
      key={fact.id}
      removeFav={removeFav}
      cardSelect={selectCard}
    />
  })

  useEffect(() => {
  
  },[selected])

  if (selected) {
    return (
      <ExpandedCard removeCard={deselectCard} stats={selected} />
    )
  } else {
    return (
      <section className="fav-card-display">
      {!savedCards.length ? 
      <h2 className="no-ideas">No saved ideas yet</h2> :
      savedCards}
    </section>
    )
  }
};

export default Favorites;

Favorites.propTypes = {
  favs: PropTypes.array.isRequired,
  removeFav: PropTypes.func.isRequired
}