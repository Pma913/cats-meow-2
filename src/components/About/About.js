import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-box">
      <div className="title-box">
        <h2 className="about-title">About Cats Meow</h2>
        <p className="about-description">The app that is all about the cat. 
        For those individuals that are convinced
        they need to expand their knowledge about cats and nothing else, welcome and enjoy!
        </p>
      </div>
      <div className="how-box">
        <h3 className="how-title">How do I Cats Meow?</h3>
        <ol className="how-list">
          <li className="list-item">Click the "Get Cat Facts" button</li>
          <li className="list-item">View the random fact</li>
          <li className="list-item">Favorite</li>
          <li className="list-item">Repeat</li>
          <li className="list-item">View all your favorites in one convenient location</li>
        </ol>
      </div>
    </section>
  );
};

export default About;