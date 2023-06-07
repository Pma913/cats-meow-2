import React from 'react';
import './Card.css';

const Card = ({ description }) => {
  return (
    <div className="fav-card">
      <p className="fav-card-fact">{description}</p>
      <button className="delete-btn">Delete</button>
    </div>
  );
};

export default Card;