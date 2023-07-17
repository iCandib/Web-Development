import React from 'react';
import './Quote.css';

function Quote() {
  return (
    <section
      className="all_containers quote-background"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/pexels-nathan-cowley-1089168.jpg)`,
      }}
    >
      <div className="container-fluid">
        <div className="quote-container">
          <h2 className="quote">
            FINDING CLARITY AND BALANCE FOR THE LIFE YOU WANT TO LIVE
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Quote;
