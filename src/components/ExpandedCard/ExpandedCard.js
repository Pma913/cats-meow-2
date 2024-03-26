import './ExpandedCard.css';
import { useState } from 'react';
import cancelIcon from '../../utilities/x.svg';
import expandArrow from '../../utilities/expand-arrow.png';

const ExpandedCard = ({ stats, removeCard }) => {

  const [dropdown, setDropdown] = useState(false)

  const triggerDropdown = () => {
    setDropdown(!dropdown)
  }


  const description = () => {
    if (stats.description.length > 200) {
      let cutDescription = stats.description.slice(0, 200)
      const lastFullWord = cutDescription.lastIndexOf(' ')
      return cutDescription.slice(0, lastFullWord) + '...'
    } else {
      return stats.description
    }
  }

  const readMore = stats.description.length > 250 ? <p className="read-more">Read More</p> : ''
  
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
          <div className={dropdown ? "stats-column-con-active" : "stats-column-con"}>
            <div className={dropdown ? "stats-column-1 active-drop" : "stats-column-1"}>
              <h4 className="exp-name">{stats.name}</h4>
              <img src={expandArrow} alt="expand-stats" className={dropdown ? "stats-dropup" : "stats-dropdown"} onClick={triggerDropdown}/>
            </div>
          <div className={dropdown ? "stats-column-2" : "stats-column-2 hide-stats"}>
            <p className="exp-description drop">{`Description: ${description()}`}{readMore}</p>
            <p className="exp-stats-title drop">Stats</p>
            <p className="exp-dogFriendly drop">{`Dog Friendly: ${stats.dogFriendly}`}</p>
            <p className="exp-energyLevel drop">{`Energy Level: ${stats.energyLevel}`}</p>
            <p className="exp-origin drop">{`Origin: ${stats.origin}`}</p>
            <p className="exp-temperament drop">{`Temperament: ${stats.temperament}`}</p>
            <p className="exp-links-title drop">External Links</p>
            <div className="exp-links-container">
              <a className="vca-link" href={stats.vcaUrl}>VCA</a>
              <a className="wiki-link" href={stats.wikiUrl}>Wikipedia</a>
            </div>
          </div>
          </div>
          <img className="remove-card" src={cancelIcon} alt="" onClick={removeCard} />
        </div>
      </div>
    </div>
  )
}

export default ExpandedCard;