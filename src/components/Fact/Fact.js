import React, { useEffect } from 'react';
import './Fact.css';
import { getCatPhotos } from '../../utilities/api-call';
import PropTypes from 'prop-types'; 
import dataCleaner from '../../utilities/dataCleaner';
import FactCard from '../FactCard/FactCard';


const Fact = ({ favFact, removeFav, setCats, cats, catCount, saveCatCount }) => {
  
  const catSpecs = cats.map(cat => <FactCard 
          key={cat.id}
          details={cat} 
          favFact={favFact}
          removeFav={removeFav}
        />);

  const fetchFact = () => {
    getCatPhotos()
      .then(res => {
        const cleanedDetails = dataCleaner(res);
        setCats([...cats, ...cleanedDetails]);
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(()=> {
  },[favFact, removeFav])

  return (
    <section className="fact-page">
      <p className={catCount > 0 ? "arrow-container" : "inactive-container"} onClick={() => {
        if (catCount > 0) {
          saveCatCount(catCount -= 1)
        }
      }}><i className={catCount > 0 ? "arrow left" : "arrow left inactive"}></i></p>

      {catSpecs[catCount]}
      
      <p className="arrow-container" onClick={() => {
        if (catCount === catSpecs.length - 2) {
          fetchFact();
        }
        saveCatCount(catCount += 1)
      }}><i className="arrow right"></i></p>
    </section>
  )
};

export default Fact;

Fact.propTypes = {
  favFact: PropTypes.func.isRequired
}