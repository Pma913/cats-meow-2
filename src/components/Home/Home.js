import React from 'react';
import './Home.css';
import About from '../About/About'
import { Link } from 'react-router-dom';
import kitty from '../../utilities/home-page-kitty.jpg';
import bigKitty from '../../utilities/full-size-kitty.jpg';

const Home = () => {

const screenWidth = window.screen.width;

const homeCat = screenWidth > 1000 ? bigKitty : kitty;
  
  return (
    <section className="home">
      <div className="hero">
        <img className="hero-img" src={homeCat} alt="Cat lying on its back"/>
        <Link to="/fact"><button className="fact-btn">Get Cat Facts</button></Link>
        <Link to="/favorites"><button className="fav-btn">Get Favorites</button></Link>
      </div>
      <div>
        <About />
      </div>
    </section>
  );
};

export default Home;