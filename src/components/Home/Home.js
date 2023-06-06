import React from 'react';
import './Home.css';
import About from '../About/About'

const Home = () => {
  return (
    <section>
      <div>
        <img src="https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib
        =rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto
        =format&fit=crop&w=1074&q=80" alt="Cat lying on its back"/>
        <button>Get Cat Facts</button>
        <button>Get Favorites</button>
      </div>
      <div>
        <About />
      </div>
    </section>
  );
};

export default Home;