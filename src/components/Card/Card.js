import React from 'react';
import './Card.css';

const Card = ({ description }) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default Card;