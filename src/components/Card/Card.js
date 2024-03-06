import React from 'react';
import './Card.css';
import PropTypes from 'prop-types'; 

const Card = ({ name, removeFav, id, image }) => {
  return (
    <div className="fav-card">
      <img src={image} alt={`${name} cat`} className="card-thumb" />
      <div className="card-btn-container">
        <button className="delete-btn" onClick={() => {
          removeFav(id);
        }}>Delete</button>
        <button className="expand-button">Expand</button>
      </div>
      <p className="fav-card-name">{name}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  removeFav: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}