import './FactCard.css';
import heart from '../../utilities/heart.png';

const FactCard = ({ details, favFact, removeFav, leftArrow, rightArrow }) => {

  return (
    <div className="fact-display">
      <div className="cat-specs">
        <div className="cat-details">
          <div className="name-fav-con">
            <p className="name">{details.name}</p>
            <div className="button-container">
              <div className="vote-icon-container">
                <img src={heart} alt="favorite button" className={details.favorited ? "vote-icon fav" : "vote-icon"} onClick={() => {
                  details.favorited ? removeFav(details.id) : favFact(details);
                }}/>
            </div>
          </div>
          </div>
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