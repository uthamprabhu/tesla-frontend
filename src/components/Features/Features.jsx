import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Key Features</h2>
      <div className="features-list">
        <div className="feature">
          <h3>Autopilot</h3>
          <p>Advanced safety and convenience features.</p>
        </div>
        <div className="feature">
          <h3>Long Range</h3>
          <p>Drive farther with our cutting-edge batteries.</p>
        </div>
        <div className="feature">
          <h3>Over-the-Air Updates</h3>
          <p>Your car gets better with time.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
