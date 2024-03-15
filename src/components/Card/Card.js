import React from 'react';
import './Card.css';
import PropTypes from 'prop-types'; 
import trashIcon from '../../utilities/trash-icon.png';
import expandIcon from '../../utilities/expand-icon.png';

const Card = ({ name, removeFav, id, image, cardSelect, stats }) => {
  return (
    <div className="fav-card">
      <img src={image} alt={`${name} cat`} className="card-thumb" />
      <div className="card-btn-container">
        <img src={trashIcon} className="delete-btn" alt="trash icon" onClick={() => removeFav(id)} />
        <img src={expandIcon} className="expand-btn" alt="expand icon" onClick={() => cardSelect(stats)} />
      </div>
      <p className="fav-card-name">{name}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  removeFav: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}