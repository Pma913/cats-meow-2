import React from 'react';
import './Home.css';
import About from '../About/About'
import { Link } from 'react-router-dom';
import getCatFacts from '../../utilities/api-call';
import PropTypes from 'prop-types'; 

const Home = ({ getFact }) => {
  return (
    <section className="home">
      <div className="hero">
        <img className="hero-img" src="https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib
        =rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto
        =format&fit=crop&w=1074&q=80" alt="Cat lying on its back"/>
        <Link to="/fact"><button className="fact-btn" onClick={() => {
          getCatFacts('https://catfact.ninja/fact')
          .then(data => {
            const id = Date.now();
            getFact(data.fact,  id);
          })
          .catch(err => {
            getFact(err);
            console.log(err.message);
          })
        }}>Get Cat Facts</button></Link>
        <Link to="/favorites"><button className="fav-btn">Get Favorites</button></Link>
      </div>
      <div>
        <About />
      </div>
    </section>
  );
};

export default Home;