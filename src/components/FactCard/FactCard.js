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
          <p className="fact">{details.description}</p>
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