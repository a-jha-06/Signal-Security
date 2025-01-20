import React from "react";
import "./index.css"; // Import the CSS file
import banner from "../../images/image.png"
const SecuritySection = () => {
  return (
    <div className="security-container" >
      <h2 className="security-heading">
        Take a look at the <span className="highlight">reliability, commitment, and forward-thinking</span> approach of a security agency.
      </h2>
      <div className="security-content">
        <div className="image-container">
          <img
            src={banner} // Replace with the correct image URL
            alt="Security guard"
            className="security-image"
          />
        </div>
        <div className="text-container">
          <div className="text-block">
            <h3 className="text-title">Vision</h3>
            <p className="text-content">
              To provide excellence in security services, giving peace of mind and ensuring the safety and security of the people, property, and information.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-title">Mission</h3>
            <p className="text-content">
              To provide high-class error-free security service to the complete satisfaction of our clients and promptly respond to their security needs at a cost acceptable to them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
