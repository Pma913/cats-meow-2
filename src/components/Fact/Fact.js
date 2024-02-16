import React, { useState } from 'react';
import './Fact.css';
import { getCatFacts, getCatPhotos } from '../../utilities/api-call';
import PropTypes from 'prop-types'; 
import { useLoaderData } from 'react-router-dom';
import testData from '../../utilities/test-data';
import dataCleaner from '../../utilities/dataCleaner';
import FactCard from '../FactCard/FactCard';

const Fact = ({ favFact }) => {
  const savedSpec = JSON.parse(sessionStorage.getItem('currentSpec'))
  // const catSpecs = useLoaderData()
  const catSpecs = dataCleaner(testData)
  const [currentFact, setCurrentFact] = useState(savedSpec || catSpecs);

  const setFact = (fact) => {
    setCurrentFact(fact);
    sessionStorage.setItem('currentFact', JSON.stringify(fact))
  }

  const fetchFact = () => {
  // const res = await getCatPhotos()
  // const cleanedDetails = dataCleaner(res)
  // stFact(cleanedDetails)
  }

  const mapFacts = catSpecs.map(cat => <FactCard key={cat.id} details={cat}/>)
  console.log(mapFacts)
  // I want to show only one card at a time
  // but I want other cards to be loaded and ready to render
  // Fetch a certain number of cats as an array (5)
  // store that array in state
  // have a forward and a back button
  // when user clicks the next button, their place in que
  // changes and a new fetch is made and added to the end
  // of the que
  // map the array into FactCard components
  // store the array in state
  // render state['placeholder variable']

  return (
    <section className="fact-page">
      {/* <div className="fact-display">
        <div className="cat-specs">
          <div className="cat-details">
            <p className="name">{`Name: ${currentFact.name}`}</p>
            <p className="dog-friendly">{`Dog Friendly: ${currentFact.dogFriendly}`}</p>
            <p className="energy-level">{`Energy Level: ${currentFact.energyLevel}`}</p>
            <p className="affection-level">{`Affection Level: ${currentFact.affectionLevel}`}</p>
            <p className="origin">{`Origin: ${currentFact.origin}`}</p>
            <p className="temperament">{`Temperaments: ${currentFact.temperament}`}</p>
            <p className="fact">{`Description: ${currentFact.description}`}</p>
          </div>
          <div className="button-container">
            <button className="fav-card-btn" onClick={() => {
              favFact(currentFact)
            }}>Favorite</button>
            <button className="new-fact-btn" onClick={fetchFact}>New Fact</button>
          </div>
        </div>
        <img className="fact-img" src={currentFact.image}
        alt={`A ${currentFact.name} cat`} />
      </div> */}
      {mapFacts}
    </section>
  )
};

export default Fact;

export const factLoader = async () => {
//   // const res = await fetch('https://catfact.ninja/fact')

//   // return res.json()
//   const res = await getCatPhotos()

//   return dataCleaner(res)
}

Fact.propTypes = {
  // randFact: PropTypes.string,
  favFact: PropTypes.func.isRequired
}