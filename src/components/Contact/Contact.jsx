import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <h2 className="contact-title">Questions?</h2>
      <div className="contact-container">
        <div className="contact-left">
          <h3 className="contact-header">Contact Us</h3>
          <p className="contact-desc">
            Need to get in touch with us? Please fill out the form with your
            inquiry and we will promptly reply.
          </p>
        </div>
        <div className="parent">
          <input className="contact last-name" placeholder="Last Name" />
          <input className="contact first-name" placeholder="First Name" />
          <input className="contact email" placeholder="Email" />
          <input className="contact comment" placeholder="Questions" />
          <input type="submit" />
        </div>
      </div>
    </>
  );
}

export default Contact;
