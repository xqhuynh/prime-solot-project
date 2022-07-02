import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import Card from "react-bootstrap/Card";

// CUSTOM COMPONENTS
// import RegisterForm from "../RegisterForm/RegisterForm";

function LandingPage() {
  // const [heading, setHeading] = useState("Welcome");
  // const history = useHistory();

  // const onLogin = (event) => {
  //   history.push("/login");
  // };

  return (
    <div>
      <img className="hero-image" src="./images/cake.jpg" />
      <h2 className="hero-tag">
        Welcome to Sweet Surrender. Where happiness is in every slice!
      </h2>
      <div className="services">
        {/* Inventory card */}
        <div>
          <h4 className="services-title">CAKES</h4>
          <Card>
            <Card.Img variant="top" src="./images/services-cake.jpg" />
            <Card.Body>
              <button className="services-button">View Inventory</button>
            </Card.Body>
          </Card>
        </div>

        {/* Custom order card */}
        <div>
          <h4 className="services-title">CUSTOM ORDER*</h4>
          <Card>
            <Card.Img variant="top" src="./images/contact.jpg" />
            <Card.Body>
              <button className="services-button">Contact Us</button>
            </Card.Body>
          </Card>
        </div>

        {/* About card */}
        <div>
          <h4 className="services-title">ABOUT US</h4>
          <Card>
            <Card.Img variant="top" src="./images/inquire.jpg" />
            <Card.Body>
              <button className="services-button">Who We Are</button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="disclosure">
        <h4>*Please allow 3-5 business days for custom orders.</h4>
      </div>

      {/* Carousel */}
      <div className="carousel-container"></div>
    </div>
  );
}

export default LandingPage;

/* <div className="grid">
        <div className="grid-col grid-col_8"></div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div> */
