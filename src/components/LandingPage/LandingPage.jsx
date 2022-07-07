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
      <h2 className="hero-tag">
        Welcome to Sweet Surrender. Where happiness is in every slice!
      </h2>

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
