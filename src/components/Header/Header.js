import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import Hamburg from '../Hamburg/Hamburg';

const Header = () => {

  return (
    <section className="header">
      <Link to="/"><img className="logo" src="./cats_meow.png" alt="Cute cat"/></Link> 
      <Link to="/" className="logo-link"><h1 className="app-title">Cats Meow</h1></Link>
      <div className={`nav-links`}>
        <NavLink className="link" to="/">home</NavLink>
        <NavLink className="link" to="/fact">facts</NavLink>
        <NavLink className="link" to="/favorites">favorites</NavLink>
      </div>
      <Hamburg />
    </section>
  );
};

export default Header;