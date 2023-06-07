import React from 'react';
import './Favorites.css';
import Card from '../Card/Card';

const Favorites = ({ savedFacts }) => {
  const savedCards = savedFacts.map(fact => {
    return <Card 
      description={fact.description}
      img={fact.img}
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