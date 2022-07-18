import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./LandingPage.css";

// CUSTOM COMPONENTS
// import RegisterForm from "../RegisterForm/RegisterForm";
import Carousel from "../Carousel/Carousel";
import AboutPage from "../AboutPage/AboutPage";
import CakesList from "../CakesList/CakesList";
import Contact from "../Contact/Contact";

function LandingPage() {
  // const [heading, setHeading] = useState("Welcome");
  // const history = useHistory();

  // const onLogin = (event) => {
  //   history.push("/login");
  // };

  return (
    <div>
      <Carousel />
      <div className="hero-container">
        <h2 className="hero-tag">Welcome to Sweet Surrender.</h2>
        <h4 className="hero-subtext">Where happiness is in every slice.</h4>
      </div>

      {/* Cakes List */}
      <CakesList />

      <div className="disclosure">
        <h4>
          *Please allow 3-5 business days for processing as cakes are made to
          order.
        </h4>
      </div>
      <AboutPage />
      <Contact />
    </div>
  );
}

export default LandingPage;
