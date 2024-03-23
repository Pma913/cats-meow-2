import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Hamburg.css';
import ham from '../../utilities/hamburg.svg';
import x from '../../utilities/x.svg';


const Hamburg = () => {
  const [hamburger, setHamburger] = useState(false);
  const [hidden, setHidden] = useState('hidden');

  const toggleHamburg = () => {
    setHamburger(!hamburger);
    toggleHidden();
  }
  
  const toggleHidden = () => {
    hidden === 'hidden' ? setHidden('reveal') : setHidden('hidden');
  }

  return (
    <div className="ham-menu-box">
      <img className="hamburg" alt="" src={!hamburger ? ham : x} onClick={toggleHamburg}/>
      <div className={`home-menu ${hidden}`}>
        <NavLink className="link" to="/">home</NavLink>
        <NavLink className="link" to="/fact">facts</NavLink>
        <NavLink className="link" to="/favorites">favorites</NavLink>
      </div>
    </div>
  )
}

export default Hamburg;