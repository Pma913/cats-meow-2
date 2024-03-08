import './ExpandedCard.css';

const ExpandedCard = ({ stats, removeCard }) => {
  console.log(stats)
  return (
    <div className="expanded-background" onClick={removeCard}>
      <div className="expanded-card">
        <h4 className="name">{stats.name}</h4>
        <p className="description">{stats.description}</p>
        <p className="stats-title">Stats</p>
        <p className="dogFriendly">{stats.dogFriendly}</p>
        <p className="energyLevel">{stats.energyLevel}</p>
        <p className="origin">{stats.origin}</p>
        <p className="temperament">{stats.temperament}</p>
        <p className="links-title">External Links</p>
        <p className="vca-link">{stats.vcaUrl}</p>
        <p className="wiki-link">{stats.wikiUrl}</p>
        <p className="remove-card" onClick={removeCard}>X</p>
      </div>
    </div>
  )
}

export default ExpandedCard;