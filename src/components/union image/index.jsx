import React from "react";
import "./index.css";

const Directors = () => {
  return (
    <div className="directors-container">
      <h1 className="directors-title">
        Our <span>Directors</span>
      </h1>

      {/* Chandrakant Jha */}
      <div className="director">
        <img
          src="/images/chandrakant.png" // replace with actual path
          alt="Chandrakant Jha"
        />
        <div className="director-info">
          <h2>Chandrakant Jha</h2>
          <p>
            Conscientious, meticulous result oriented individual with an
            outstanding performance recording security operation,
            administration, fire safety and logistics in the Indian Navy for
            over 28 years. Also have 11 year's of experience as a head of
            department for handling security, vigilance, fire safety,
            administrations in the corporate sector.
          </p>
        </div>
      </div>

      {/* Mangesh Kumar Jha */}
      <div className="director">
        <img
          src="/images/mangesh.png" // replace with actual path
          alt="Mangesh Kumar Jha"
        />
        <div className="director-info">
          <h2>Mangesh Kumar Jha</h2>
          <p>
            Mangesh Jha is classic tale of self made person who branched out on
            his own after arming himself with the skills required in this nice
            domain. Following his graduation in banking and insurance (B.B.I)
            form Mumbai University (Sydenham college). Also he has done his post
            graduation from Mumbai University and having 7 year's of working
            experience in corporate sector.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Directors;
