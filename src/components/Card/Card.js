import React from 'react';
import './Card.css';
import PropTypes from 'prop-types'; 
import trashIcon from '../../utilities/trash-icon.png';

const Card = ({ name, removeFav, id, image }) => {
  return (
    <div className="fav-card">
      <img src={image} alt={`${name} cat`} className="card-thumb" />
      <div className="card-btn-container">
        <img src={trashIcon} className="delete-btn" onClick={() => removeFav(id)} />
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