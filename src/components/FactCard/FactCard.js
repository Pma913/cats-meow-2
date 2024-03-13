import './FactCard.css';
import { useState } from 'react';
import heart from '../../utilities/heart.png';

const FactCard = ({ details, favFact, removeFav, leftArrow, rightArrow }) => {

  const [favorited, setFavorited] = useState(false);

  const like = <div className="button-container">
          <div className="vote-icon-container">
            <img src={heart} alt="favorite button" className={favorited ? "vote-icon fav" : "vote-icon"} onClick={() => {
              setFavorited(!favorited);
              favFact(details);
            }}/>
          </div>
        </div>

  return (
    <div className="fact-display">
      <div className="cat-specs">
        <div className="cat-details">
          <p className="name">{details.name}{like}</p>
          <p className="dog-friendly">{`Dog Friendly: ${details.dogFriendly}`}</p>
          <p className="energy-level">{`Energy Level: ${details.energyLevel}`}</p>
          <p className="affection-level">{`Affection Level: ${details.affectionLevel}`}</p>
          <p className="origin">{`Origin: ${details.origin}`}</p>
          <p className="temperament">{`Temperaments: ${details.temperament}`}</p>
          <p className="fact">{`Description: ${details.description}`}</p>
        </div>
        
        
      </div>
      <img className="fact-img" src={details.image}
      alt={`A ${details.name} cat`} />
      {leftArrow}
      {rightArrow}
    </div>
  )
}

export default FactCard;