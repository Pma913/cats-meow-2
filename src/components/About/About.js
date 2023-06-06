import React from 'react';
import './About.css';

const About = () => {
  return (
    <section>
      <div>
        <h2>About Cats Meow</h2>
        <p>The app that is all about the cat. 
        For those individuals that are just convinced
        they need to know obscure facts about cats to 
        make them seem knowledgeable about felines, or simply 
        you are convinced a random cat fact might get asked
        at your next trivia night. Regardless of your reason 
        for being here, I think we can all agree that you are
        in the right place. </p>
      </div>
      <div>
        <h3>How do I Cats Meow?</h3>
        <ol>
          <li>Click the "Get Cat Facts" button</li>
          <li>View the random fact</li>
          <li>Favorite</li>
          <li>Repeat</li>
          <li>View all your favorites in one convenient location</li>
        </ol>
      </div>
    </section>
  );
};

export default About;