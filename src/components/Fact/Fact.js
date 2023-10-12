import React, {useEffect, useState} from 'react';
import './Fact.css';
import getCatFacts from '../../utilities/api-call';
import PropTypes from 'prop-types'; 
import { useLoaderData } from 'react-router-dom';

const Fact = ({ favFact }) => {
  const [currentFact, setCurrentFact] = useState(JSON.parse(sessionStorage.getItem('currentFact')) || {});
  const [err, setErr] = useState('');

  const randFact = useLoaderData()
  randFact.id = Date.now()

  console.log(randFact, 'loaderData')

  const setFact = (fact, id) => {
    if (!id) {
      setErr('Looks like there was a problem. Please try again later')
    } else {
      setCurrentFact({fact: fact, id: id});
      sessionStorage.setItem('currentFact', JSON.stringify({fact: fact, id: id}))
    }
  }

  const fetchFact = () => {
    getCatFacts('https://catfact.ninja/fact')
      .then(data => {
        const id = Date.now();
        setFact(data.fact,  id);
      })
      .catch(err => {
        setFact(err);
        console.log(err.message);
      })
  }

  // useEffect(() => {
  //   if (!currentFact) {
  //     fetchFact()
  //   }
  // },[])


  return (
    <section className="fact-page">
      <div className="fact-display">
        <p className="fact">{currentFact.fact}</p>
        <img className="fact-img" src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib
        =rb-4.0.3&ixid
        =M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx
        8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt="Cat with butterfly on nose" />
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
  const res = await fetch('https://catfact.ninja/fact')

  return res.json()
}

Fact.propTypes = {
  randFact: PropTypes.string,
  favFact: PropTypes.func.isRequired
}