import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <section className="header">
      <img className="logo" src="./cats_meow.png" alt="Cute cat" /> 
      <h1 className="app-title">Cats Meow</h1>
      <div className="nav-links">
        <NavLink className="link" to="/">home</NavLink>
        <NavLink className="link" to="/facts">facts</NavLink>
        <NavLink className="link" to="/favorites">favorites</NavLink>
      </div>
    </section>
  );
};

export default Header;