// FlipCard.js
import React from 'react';
import './FlipCard.css';

function FlipCard({ icon, title, content }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <span className="feature-icon" role="img" aria-label={title}>{icon}</span>
          <h3>{title}</h3>
        </div>
        <div className="flip-card-back">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
