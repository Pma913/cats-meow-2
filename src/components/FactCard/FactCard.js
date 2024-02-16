const FactCard = ({ details }) => {

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
          <button className="fav-card-btn" onClick={() => {
            // favFact(details)
          }}>Favorite</button>
          {/* <button className="new-fact-btn" onClick={fetchFact}>New Fact</button> */}
        </div>
      </div>
      <img className="fact-img" src={details.image}
      alt={`A ${details.name} cat`} />
    </div>
  )
}

export default FactCard;