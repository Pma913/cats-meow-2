import React, { useState } from 'react';
import './Fact.css';
import { getCatPhotos, getSingleCat } from '../../utilities/api-call';
import PropTypes from 'prop-types'; 
import { useLoaderData } from 'react-router-dom';
import dataCleaner from '../../utilities/dataCleaner';
import FactCard from '../FactCard/FactCard';


const Fact = ({ favFact }) => {
  // const savedSpecs = JSON.parse(sessionStorage.getItem('fact-cards'));
  
  const catSpecs = useLoaderData();
  const catCards = catSpecs.map(cat => <FactCard key={cat.id} details={cat} favFact={favFact}/>);
  // sessionStorage.setItem('fact-cards', JSON.stringify(catSpecs));

  const [currentFact, setCurrentFact] = useState(catCards);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false)
  

  const setFact = (fact) => {
    setCurrentFact([...currentFact, fact]);
    // sessionStorage.setItem('fact-cards', JSON.stringify([...savedSpecs, fact]));
    // sessionStorage.setItem('placeholder', JSON.stringify(currentPlace++));
    // setCurrentPlace(currentPlace++);
  }

  const saveFacts = (fact) => {
      // sessionStorage.setItem('fact-cards', JSON.stringify([...savedSpecs, fact]));
  }

  const fetchFact = () => {
  getCatPhotos()
    .then(res => {
      const cleanedDetails = dataCleaner(res).map(cat => <FactCard key={cat.id} details={cat} favFact={favFact}/>);
      setCurrentFact(oldFacts => [...oldFacts, ...cleanedDetails]);
    });
  }
  
  // logic for back an forward exists
  // now we need to make logic for fetching new material and appending it 
  // to the end of the cards

  return (
    <section className="fact-page">
      <p className={active ? "arrow-container" : "inactive-container"} onClick={() => {
        if (count > 0) {
          setCount(count => count - 1)
        }
        if (count <= 1) {
          setActive(false)
        }
        }}><i className={active ? "arrow left" : "arrow left inactive"}></i></p>
      {currentFact[count]}
      <p className="arrow-container" onClick={() => {
        if (count < 1) {
          setActive(true)
        }
        if (currentFact.length - count <= 1) {
          fetchFact()
          console.log('alrightey matey')
          console.log(count, currentFact)
        }
        setCount(count => count + 1)
      }}><i className="arrow right"></i></p>
    </section>
  )
};

export default Fact;

export const factLoader = async () => {
  const res = await getCatPhotos()

  return dataCleaner(res)
}

Fact.propTypes = {
  favFact: PropTypes.func.isRequired
}