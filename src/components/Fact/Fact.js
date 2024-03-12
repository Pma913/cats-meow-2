import React, { useEffect } from 'react';
import './Fact.css';
import { getCatPhotos } from '../../utilities/api-call';
import PropTypes from 'prop-types'; 
import dataCleaner from '../../utilities/dataCleaner';
import FactCard from '../FactCard/FactCard';
import arrow from '../../utilities/arrow-icon.png';


const Fact = ({ favFact, removeFav, setCats, cats, catCount, saveCatCount }) => {
  
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

  const leftArrow = <img className={catCount > 0 ? "arrow-left" : "inactive-arrow-left"} 
        src={arrow}
        alt='arrow left icon'
        onClick={() => {
        if (catCount > 0) {
          saveCatCount(catCount -= 1)
        }
      }} />

  const rightArrow = <img className="arrow-right" 
        src={arrow}
        alt='arrow right icon'
        onClick={() => {
        if (catCount === catSpecs.length - 2) {
          fetchFact();
        }
        saveCatCount(catCount += 1)
      }} />

  const catSpecs = cats.map(cat => <FactCard 
          key={cat.id}
          details={cat} 
          favFact={favFact}
          removeFav={removeFav}
          leftArrow={leftArrow}
          rightArrow={rightArrow}
        />);

  useEffect(()=> {
  },[favFact, removeFav])

  return (
    <section className="fact-page">
      

      {catSpecs[catCount]}
      
      
    </section>
  )
};

export default Fact;

Fact.propTypes = {
  favFact: PropTypes.func.isRequired
}