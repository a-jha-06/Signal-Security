import React from "react";
import { FaLightbulb, FaUserShield, FaVideo } from "react-icons/fa";
import "./SafeSection.css";

const SafeSection = () => {
  return (
    <div className="safe-container">
      {/* Left Content */}
      <div className="safe-left">
        <h1>
          We Make People <span>Feel Safe</span>
        </h1>
        <p>
          We are passionate about our work and truly believe in offering the
          best of service to our clients at the affordable cost. We continuously
          upgrade and improve ourselves to give you the best in security. As we
          truly believe that security is much more than mere deployment and
          monitoring of guards.
        </p>
        {/* <button className="contact-btn" href="#contact">Contact Us</button> */}
      </div>

      {/* Right Content */}
      <div className="safe-right">
        <div className="card card-center">
          <p>
            Signal 88 Private Limited is committed to providing comprehensive
            security solutions that ensure the safety and well-being of our
            client and their asserts.
          </p>
          <div className="icon-circle">
            <FaLightbulb size={24} color="red" />
          </div>
        </div>

        <div className="card card-top">
          <p>
            Our highly trained and experienced security personnel are equipped
            with the latest technology and protocols to effectively deter and
            prevent threats.
          </p>
          <div className="icon-circle">
            <FaUserShield size={24} color="red" />
          </div>
        </div>

        <div className="card card-bottom">
          <p>
            Through our personalised security services, we strive to create a
            secure and peaceful environment for our clients, fostering trust and
            confidence.
          </p>
          <div className="icon-circle">
            <FaVideo size={24} color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeSection;
