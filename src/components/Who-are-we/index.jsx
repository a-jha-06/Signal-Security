import React from "react";
import "./index.css";

const WhoWeAre = () => {
  return (
    <section className="who-we-are-container" >
      <div className="who-we-are-content" id="about">
        <h2 className="who-we-are-heading">
          Get To Know <span className="highlight">Who We Are ?</span>
        </h2>
        <p className="who-we-are-paragraph">
          At Signal 88 Security, we are dedicated to providing exceptional security services tailored to meet the diverse needs of our clients across India. With a strong foundation built on over 28 years of experience in Indian Navy and 11 years in corporate sector, administration, vigilance, and fire safety, our team is led by industry experts who are passionate about ensuring the safety and security of people, property, and information.
        </p>
        <p className="who-we-are-paragraph2">
          We pride ourselves on our commitment to excellence, rapid response to client needs, and a proactive approach to security management. With a focus on building long-term relationships, we aim to relieve our clients of security concerns, allowing them to focus on their core business operations. Choose Signal 88 Security for a reliable partner in safeguarding your assets and ensuring peace of mind.
        </p>
        <button className="who-we-are-button">Get In Touch</button>
      </div>
      
    </section>
  );
};

export default WhoWeAre;
