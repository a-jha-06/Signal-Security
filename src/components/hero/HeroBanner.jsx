import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-image">
        {/* Access from public/images folder */}
        <img src="/images/security-guard.png" alt="Security Guard" />
      </div>
     <div className="hero-content">
  <h2>
    <span className="hero-heading-highlight">About</span> Company
  </h2>
  <p>
    Signal 88 Security is dedicated to providing <span className="text-bold">efficient</span> and 
    <span className="text-accent"> professional security services</span> throughout India. 
    We offer the latest <span className="text-accent">security technology</span> to ensure reliable services 
    that are <span className="text-bold">guaranteed</span> to meet your requirements.
  </p>
 
</div>

    </div>
  );
};

export default HeroBanner;
