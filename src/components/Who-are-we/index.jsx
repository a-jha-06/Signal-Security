import React from "react";
import "./index.css";

const WhoWeAre = () => {
  return (
    // <section className="who-we-are-section" id="about">
      <div className="who-we-are-wrapper">
        {/* Left Column - Text */}
        <div className="who-we-are-text">
          <h2 className="who-we-are-heading">
            Get To Know <span className="highlight">Who We Are ?</span>
          </h2>

          <p className="who-we-are-paragraph">
            At Signal 88 Security, we are dedicated to providing exceptional
            security services tailored to meet the diverse needs of our clients
            across India. With a strong foundation built on over 28 years of
            experience in Indian Navy and 11 years in corporate sector,
            administration, vigilance, and fire safety, our team is led by
            industry experts who are passionate about ensuring the safety and
            security of people, property, and information.
          </p>

          <p className="who-we-are-paragraph">
            We pride ourselves on our commitment to excellence, rapid response
            to client needs, and a proactive approach to security management.
            With a focus on building long-term relationships, we aim to relieve
            our clients of security concerns, allowing them to focus on their
            core business operations. Choose Signal 88 Security for a reliable
            partner in safeguarding your assets and ensuring peace of mind.
          </p>

          {/* <button className="who-we-are-button" href="#contact">Get In Touch</button> */}
        </div>

        {/* Right Column - Images */}
        <div className="who-we-are-images">
          {/* 2x2 Grid */}
          <div className="image-grid">
            <img src="/images/IMG-20250622-WA0022.jpg" alt="Training 1" className="who-we-are-img" />
            <img src="/images/IMG-20250622-WA0024.jpg" alt="Training 2" className="who-we-are-img" />
            <img src="/images/IMG-20250622-WA0022.jpg" alt="Training 3" className="who-we-are-img" />
            <img src="/images/IMG-20250622-WA0024.jpg" alt="Training 4" className="who-we-are-img" />
          </div>

          {/* Large Image */}
          <div className="large-img-wrapper">
            <img
              src="/images/IMG-20250622-WA0024.jpg"
              alt="Security Large"
              className="who-we-are-img large-img"
            />
          </div>
        </div>
      </div>
    // </section>
  );
};

export default WhoWeAre;
