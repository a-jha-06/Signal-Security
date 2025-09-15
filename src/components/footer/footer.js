import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [showModal, setShowModal] = useState(null); // null | "terms" | "privacy"

  const handleOpen = (type) => setShowModal(type);
  const handleClose = () => setShowModal(null);

  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <img
          src="/images/logo.png"
          alt="Company Logo"
          style={{ background: "black" }}
        />
      </div>

      {/* Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <a href="#!" onClick={() => handleOpen("privacy")}>
            Privacy Policy
          </a>
          <a href="#!" onClick={() => handleOpen("terms")}>
            Terms & Conditions
          </a>
          <a href="/about">About Us</a>
        </div>

        {/* <div className="footer-column">
          <a href="/home">Home</a>
          <a href="/blog">Blog</a>
          <a href="/team">Our Team</a>
        </div> */}
      </div>

      {/* Subscribe */}
      <div className="footer-subscribe">
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
      </div>

      {/* Copy */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Signal 88 Pvt Ltd. All rights reserved.
      </p>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="modal-close" onClick={handleClose}>
              ✖
            </button>
            {showModal === "privacy" && (
              <>
                <h2>Privacy Policy</h2>
                <p>
                  At Signal 88 Pvt Ltd, your privacy is important to us. We
                  collect only necessary information to provide services,
                  improve your experience, and ensure security. We never sell
                  your data. For details about what we collect, how we use it,
                  and your rights, please read the full policy.
                </p>
              </>
            )}
            {showModal === "terms" && (
              <>
                <h2>Terms & Conditions</h2>
                <p>
                  By using this website, you agree to comply with our Terms &
                  Conditions. Our services are subject to separate agreements.
                  All content is owned by Signal 88 Pvt Ltd. We are not
                  responsible for third-party links, and all disputes are
                  subject to Indian law.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
