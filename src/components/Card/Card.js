import React from 'react';
import './Card.css';
import PropTypes from 'prop-types'; 

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

Card.propTypes = {
  description: PropTypes.string.isRequired,
  removeFav: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}