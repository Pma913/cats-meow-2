import './ExpandedCard.css';
import cancelIcon from '../../utilities/x.svg';
import expandArrow from '../../utilities/expand-arrow.png';

const ExpandedCard = ({ stats, removeCard }) => {
  
  return (
    <div className="expanded-background" onClick={(event) => {
      if (event.target.className === "expanded-background") {
        removeCard()
      }
    }}>
      <div className="expanded-card">
        <div className="expanded-image-container">
          <img className="expanded-image" src={stats.image} alt={`${stats.name} cat`} />
        </div>
        <div className="stats-area">
          <div className="stats-column-1">
            <h4 className="exp-name">{stats.name}</h4>
            <img src={expandArrow} alt="expand-stats" className="stats-dropdown" />
          </div>
          <div className="stats-column-2">
            <p className="exp-description drop">{`Description: ${stats.description}`}</p>
            <p className="exp-stats-title">Stats</p>
            <p className="exp-dogFriendly">{`Dog Friendly: ${stats.dogFriendly}`}</p>
            <p className="exp-energyLevel">{`Energy Level: ${stats.energyLevel}`}</p>
            <p className="exp-origin">{`Origin: ${stats.origin}`}</p>
            <p className="exp-temperament">{`Temperament: ${stats.temperament}`}</p>
            <p className="exp-links-title">External Links</p>
            <div className="exp-links-container">
              <a className="vca-link" href={stats.vcaUrl}>VCA</a>
              <a className="wiki-link" href={stats.wikiUrl}>Wikipedia</a>
            </div>
          </div>
          <img className="remove-card" src={cancelIcon} alt="" onClick={removeCard} />
        </div>
      </div>
    </div>
  )
}

export default ExpandedCard;