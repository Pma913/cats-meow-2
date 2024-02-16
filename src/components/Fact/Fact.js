import React, { useState } from 'react';
import './Fact.css';
import { getCatFacts, getCatPhotos } from '../../utilities/api-call';
import PropTypes from 'prop-types'; 
import { useLoaderData } from 'react-router-dom';
import testData from '../../utilities/test-data';
import dataCleaner from '../../utilities/dataCleaner';
import FactCard from '../FactCard/FactCard';

const Fact = ({ favFact }) => {
  const savedSpecs = JSON.parse(sessionStorage.getItem('fact-cards'));
  // const catSpecs = useLoaderData()
  const catSpecs = savedSpecs || dataCleaner(testData);
  const catCards = catSpecs.map(cat => <FactCard key={cat.id} details={cat} favFact={favFact}/>);
  sessionStorage.setItem('fact-cards', JSON.stringify(catSpecs));

  let [currentFact, setCurrentFact] = useState(catCards);
  let [currentPlace, setCurrentPlace] = useState(0);

  const setFact = (fact) => {
    setCurrentFact([...currentFact, fact]);
    sessionStorage.setItem('fact-cards', JSON.stringify([...savedSpecs, fact]));
    sessionStorage.setItem('placeholder', JSON.stringify(currentPlace++));
    setCurrentPlace(currentPlace++);
  }

  const saveFacts = (fact) => {
      sessionStorage.setItem('fact-cards', JSON.stringify([...savedSpecs, fact]));
  }

  const fetchFact = () => {
  // const res = await getCatPhotos()
  // const cleanedDetails = dataCleaner(res)
  // stFact(cleanedDetails)
  }

  // const factCards = 
  
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
      <p className="arrow-container" onClick={() => {
        setCurrentPlace(currentPlace--)
        console.log(currentPlace)
        }}><i className="arrow left"></i></p>
      {currentFact[currentPlace]}
      <p className="arrow-container" onClick={() => {
        setCurrentPlace(currentPlace++)
        console.log(currentPlace)
      }}><i className="arrow right"></i></p>
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