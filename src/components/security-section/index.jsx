import React from "react";
import "./index.css";

const SecuritySection = () => {
  return (
    <div className="security-container">
      {/* Top Banner */}
      <div className="top-banner">
        Providing Ex-Marine Commandos (Retired) to VIPs
      </div>

      {/* Main Heading */}
      <h2 className="security-heading">
        Take a look at the{" "}
        <span className="highlight">
          Reliability, Commitment, and Forward-Thinking
        </span>{" "}
        approach of a security agency.
      </h2>

      {/* Vision & Mission Section */}
      <div className="card-section">
        {/* Vision */}
        <div className="card">
          <h3 className="card-title">Vision</h3>
          <p className="card-text">
            To provide excellence in security services, giving peace of mind and
            ensuring the safety and security of people, property, and
            information.
          </p>
        </div>

        {/* Mission */}
        <div className="card">
          <h3 className="card-title">Mission</h3>
          <p className="card-text">
            To provide high-class, error-free security service to the complete
            satisfaction of our clients and promptly respond to all their
            security needs at a cost acceptable to them.
          </p>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="image-container">
        <img
          src="/images/hero-image-2.png"
          alt="Security guard standing"
          className="security-image"
        />
      </div>
    </div>
  );
};

export default SecuritySection;
