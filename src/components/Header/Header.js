import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import getCatFacts from '../../utilities/api-call';

const Header = ({ getFact}) => {
  return (
    <section className="header">
      <Link to="/"><img className="logo" src="./cats_meow.png" alt="Cute cat"/></Link> 
      <h1 className="app-title">Cats Meow</h1>
      <div className="nav-links">
        <NavLink className="link" to="/">home</NavLink>
        <NavLink className="link" to="/fact" onClick={() => {
          getCatFacts('https://catfact.ninja/fact')
        .then(data => {
          const id = Date.now();
          getFact(data.fact,  id);
        })
        .catch(err => {
          getFact(err);
          console.log(err.message);
        })
        }}>facts</NavLink>
        <NavLink className="link" to="/favorites">favorites</NavLink>
      </div>
    </section>
  );
};

export default Header;