import thumbsUp from '../../utilities/thumbs-up.png';
import thumbsUpGold from '../../utilities/thumbs-up-gold.PNG';
import './FactCard.css';
import { useState } from 'react';

const FactCard = ({ details, favFact, removeFav }) => {

  const [favorited, setFavorited] = useState(false);

  return (
    <div className="fact-display">
      <div className="cat-specs">
        <div className="cat-details">
          <p className="name">{`Name: ${details.name}`}</p>
          <p className="dog-friendly">{`Dog Friendly: ${details.dogFriendly}`}</p>
          <p className="energy-level">{`Energy Level: ${details.energyLevel}`}</p>
          <p className="affection-level">{`Affection Level: ${details.affectionLevel}`}</p>
          <p className="origin">{`Origin: ${details.origin}`}</p>
          <p className="temperament">{`Temperaments: ${details.temperament}`}</p>
          <p className="fact">{`Description: ${details.description}`}</p>
        </div>
        <div className="button-container">
          <div className="vote-icon-container">
            <img src={favorited ? thumbsUpGold : thumbsUp} alt="favorite button" className="vote-icon fav" onClick={() => {
              setFavorited(!favorited);
              favFact(details);
            }}/>
          </div>
        </div>
      </div>
      <img className="fact-img" src={details.image}
      alt={`A ${details.name} cat`} />
    </div>
  )
}

export default FactCard;