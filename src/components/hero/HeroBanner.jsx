import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h2>About Company</h2>
        <p>
          Signal 88 Security is dedicated to providing efficient and
          professional security services throughout India. We offer the latest
          security technology to ensure efficient services that are guaranteed
          to meet your requirements.
        </p>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroBanner;
