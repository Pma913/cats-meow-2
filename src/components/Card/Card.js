import React from 'react';
import './Card.css';

const Card = ({ description, img }) => {
  return (
    <div>
      <p>{description}</p>
      <img src={img}/>
    </div>
  );
};

export default Card;