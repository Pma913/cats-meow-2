import React, { useState, useEffect } from 'react';
import './Fact.css';
import { getCatPhotos } from '../../utilities/api-call';
import PropTypes from 'prop-types'; 
import dataCleaner from '../../utilities/dataCleaner';
import FactCard from '../FactCard/FactCard';


const Fact = ({ favFact, removeFav, cats }) => {

  const [currentFacts, setCurrentFacts] = useState(cats || []);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [backup, setBackup] = useState([currentFacts[currentFacts.length - 1]]);

  const fetchFact = () => {
    getCatPhotos()
      .then(res => {
        console.log('fetching an extra 10 facts')
        const cleanedDetails = dataCleaner(res).map(cat => <FactCard 
          key={cat.id}
          details={cat} 
          favFact={favFact}
          removeFav={removeFav}
        />);
        setCurrentFacts([...cats, ...cleanedDetails]);
      })
      .then(() => {
        setBackup(backup => backup = [currentFacts[currentFacts.length - 1]]);
      });
  }

  useEffect(()=> {
  },[favFact, removeFav])

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

      {currentFacts[count] || <FactCard
        key={backup.id}
        details={backup}
        favFact={favFact}
        removeFav={removeFav}
        />}

      <p className="arrow-container" onClick={() => {
        if (count < 1) {
          setActive(true)
        }
        if (count === currentFacts.length - 2) {
          fetchFact();
        }
        setCount(count => count + 1);
      }}><i className="arrow right"></i></p>
    </section>
  )
};

export default Fact;

Fact.propTypes = {
  favFact: PropTypes.func.isRequired
}