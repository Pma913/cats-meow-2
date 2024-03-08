import './ExpandedCard.css';
import cancelIcon from '../../utilities/x.svg';

const ExpandedCard = ({ stats, removeCard }) => {
  console.log(stats.img)
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
          <h4 className="expanded-name">{stats.name}</h4>
          <p className="description">{stats.description}</p>
          <p className="stats-title">Stats</p>
          <p className="dogFriendly">{stats.dogFriendly}</p>
          <p className="energyLevel">{stats.energyLevel}</p>
          <p className="origin">{stats.origin}</p>
          <p className="temperament">{stats.temperament}</p>
          <p className="links-title">External Links</p>
          <p className="vca-link">{stats.vcaUrl}</p>
          <p className="wiki-link">{stats.wikiUrl}</p>
          <img className="remove-card" src={cancelIcon} alt="" onClick={removeCard} />
        </div>
      </div>
    </div>
  )
}

export default ExpandedCard;