import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Error.css'; 

const Error = ({ err }) => {
  return (
    <section className="error-page">
      <h2 className="error-message">{err}</h2>
      <img className="error-img" src="https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e?ixlib=rb-4.0.3&ixid
      =M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FkJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="sad cat in a box"/>
      <Link to="/"><h3>return home</h3></Link>
    </section>
  )
}

export default Error;

Error.propTypes = {
  err: PropTypes.string.isRequired
}