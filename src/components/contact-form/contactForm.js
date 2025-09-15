import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxHm72_WAGLqxolqOqJ9ommy2yJTvetpj9ks4uyOLbfnYBBqCfRfFZmflV3SYCtgl3U/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      );

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error!", error.message);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container" id="contact">
      {/* Left Section with Info + Map */}
      <div className="contact-left">
        <p>
          <b>📧 Chat With Us</b>
          <br />
          signal88pvtltd@gmail.com
        </p>
        <p>
          <b>📞 Phone</b>
          <br />
          9930502258, 7506373633
        </p>
        <p>
          <b>📍 Office</b>
          <br />
          Shop No.112, 1st floor, Mahalaxmi mall, Plot No.8/88,
          Sector-35, Kamothe, Navi Mumbai, Maharashtra - 410209
        </p>

       
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
        {status && <p className="status">{status}</p>}
      </form>
       {/* Google Map Embed */}
        <div className="map-container">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.983148211879!2d73.00481231483689!3d18.966087387019355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c4178a4a716d%3A0x824a9e427e718d1f!2sMahalaxmi%20Mall%20Kamothe!5e0!3m2!1sen!2sin!4v[TIMESTAMP]"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
    </div>
    
  );
};

export default ContactForm;
