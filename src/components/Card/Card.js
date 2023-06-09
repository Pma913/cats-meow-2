import React from 'react';
import './Card.css';

const Card = ({ description, removeFav, id }) => {
  return (
    <div className="fav-card">
      <p className="fav-card-fact">{description}</p>
      <button className="delete-btn" onClick={() => {
        removeFav(id);
      }}>Delete</button>
    </div>
  );
};

export default Card;