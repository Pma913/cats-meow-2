import React, { useState } from 'react';
import './Fact.css';
import { getCatPhotos } from '../../utilities/api-call';
import PropTypes from 'prop-types'; 
import { useLoaderData } from 'react-router-dom';
import dataCleaner from '../../utilities/dataCleaner';
import FactCard from '../FactCard/FactCard';


const Fact = ({ favFact, removeFav }) => {

  const catSpecs = useLoaderData();
  const catCards = catSpecs.map(cat => <FactCard
    key={cat.id} 
    details={cat} 
    favFact={favFact}
    removeFav={removeFav}
  />);

  const [currentFact, setCurrentFact] = useState(catCards);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [backup, setBackup] = useState([currentFact[currentFact.length - 1]]);

  const fetchFact = () => {
    getCatPhotos()
      .then(res => {
        const cleanedDetails = dataCleaner(res).map(cat => <FactCard 
          key={cat.id}
          details={cat} 
          favFact={favFact}
          removeFav={removeFav}
        />);
        setCurrentFact(oldFacts => [...oldFacts, ...cleanedDetails]);
      })
      .then(() => {
        setBackup(backup => backup = [currentFact[currentFact.length - 1]]);
      });
  }

  return (
    <section className="fact-page">
      <p className={active ? "arrow-container" : "inactive-container"} onClick={() => {
        if (count > 0) {
          setCount(count => count - 1);
        }
        if (count <= 1) {
          setActive(false);
        }
        }}><i className={active ? "arrow left" : "arrow left inactive"}></i></p>
      {currentFact[count] || <FactCard
        key={backup.id}
        details={backup}
        favFact={favFact}
        removeFav={removeFav}
        />}
      <p className="arrow-container" onClick={() => {
        if (count < 1) {
          setActive(true)
        }
        if (count === currentFact.length - 2) {
          fetchFact();
        }
        setCount(count => count + 1);
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