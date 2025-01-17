import React, { useState } from "react";
import { FaShieldAlt } from "react-icons/fa"; // You can use any icon you prefer
import './index.css'; // Import the CSS file

const TrustIndicator = () => {
  const [trustLevel, setTrustLevel] = useState(50);

  const handleSliderChange = (value) => {
    setTrustLevel(value);
  };

  return (
    <div className="trust-indicator">
      <div className="icon-text">
        <FaShieldAlt size={30} className="icon" />
        <span className="text">Trust Level: {trustLevel}%</span>
      </div>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="100"
          value={trustLevel}
          onChange={(e) => handleSliderChange(e.target.value)}
          className="slider"
        />
      </div>
    </div>
  );
};

export default TrustIndicator;
