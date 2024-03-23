import React from 'react';
import './Home.css';
import kitty from '../../utilities/home-page-kitty.jpg';
import bigKitty from '../../utilities/full-size-kitty.jpg';

const Home = () => {

const screenWidth = window.screen.width;

const homeCat = screenWidth > 1000 ? bigKitty : kitty;
  
  return (
    <section className="home">
      <div className="hero">
        <img className="hero-img" src={homeCat} alt="Cat lying on its back"/>
      </div>
    </section>
  );
};

export default Home;