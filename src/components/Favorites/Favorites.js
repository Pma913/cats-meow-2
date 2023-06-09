import React from 'react';
import './Favorites.css';
import Card from '../Card/Card';

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
      {savedCards}
    </section>
  );
};

export default Favorites;