import React, { useState } from 'react';
import './Fact.css';
import { getCatFacts, getCatPhotos } from '../../utilities/api-call';
import PropTypes from 'prop-types'; 
import { useLoaderData } from 'react-router-dom';
import testData from '../../utilities/test-data';
import dataCleaner from '../../utilities/dataCleaner';

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

  return (
    <section className="fact-page">
      <div className="fact-display">
        <p className="fact">{currentFact.description}</p>
        <img className="fact-img" src={currentFact.image}
        alt={`A ${currentFact.name} cat`} />
      </div>
      <div className="button-container">
        <button className="fav-card-btn" onClick={() => {
          favFact(currentFact)
        }}>Favorite</button>

        <button className="new-fact-btn" onClick={fetchFact}>New Fact</button>
      </div>
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