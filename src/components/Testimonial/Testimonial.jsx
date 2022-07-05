import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="hero-container">
      <div className="hero">
        <h2 className="hero-title">Testimonial</h2>

        <div className="slide-row">
          <div className="slide-col">
            <div className="user-text">
              <p>
                This cake is amazing. Exceeded my expectations. I will certainly
                order more in the future for all my special events. Thank you
                Sweet Surrender for all you've done.
              </p>
              <h3>Nina Sithideth</h3>
              <p>JP Morgan Chase</p>
            </div>
            <div className="user-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
