import React from 'react';
import './Favorites.css';
import Card from '../Card/Card';

const Favorites = ({ favs }) => {
  const savedCards = favs.map(fact => {
    return <Card 
      description={fact.fact}
      // img={fact.img}
      key={fact.id}
    />
  })
  return (
    <section>
      {savedCards}
    </section>
  );
};

export default Favorites;