import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-box">
      <div className="title-box">
        <h2 className="about-title">About Cats Meow</h2>
        <p className="about-description">The app that is all about the cat. 
        For those individuals that are just convinced
        they need to know obscure facts about cats to 
        make them seem knowledgeable about felines, or simply 
        you are convinced a random cat fact might get asked
        at your next trivia night. Regardless of your reason 
        for being here, I think we can all agree that you are
        in the right place. 
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