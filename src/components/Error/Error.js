import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({ err, removeErr }) => {
  return (
    <section>
      <h2>{err}</h2>
      <img src="https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e?ixlib=rb-4.0.3&ixid
      =M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FkJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="sad cat in a box"/>
      <Link to="/"><h3 onClick={() => removeErr()}>return home</h3></Link>
    </section>
  )
}

export default Error;