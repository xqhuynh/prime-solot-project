import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <h2>Contact Form</h2>

      <div className="parent">
        <div className="first-name">First Name</div>
        <div className="last-name">Last Name</div>
        <div className="email">Email</div>
        <div className="comment">Questions</div>
      </div>
    </>
  );
}

export default Contact;
