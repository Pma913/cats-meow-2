import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import ham from '../../utilities/hamburg.svg' 

const Header = () => {
  const [dropDown, setDropdown] = useState("hidden")
  // const [hamb, setHamb] = useState("")

  const toggleDrop = () => {
    if (dropDown === "hidden") {
      setDropdown("")
      // setHamb("hidden")
    } else {
      setDropdown("hidden")
      // setHamb("")
    } 
  }

  return (
    <section className="header">
      <Link to="/"><img className="logo" src="./cats_meow.png" alt="Cute cat"/></Link> 
      <h1 className="app-title">Cats Meow</h1>
      <img className={`hamburg hidden`} src={ham} alt="ham menu" onClick={toggleDrop}/>
      <div className={`nav-links`}>
        <NavLink className="link" to="/">home</NavLink>
        <NavLink className="link" to="/fact">facts</NavLink>
        <NavLink className="link" to="/favorites">favorites</NavLink>
      </div>
    </section>
  );
};

export default Header;