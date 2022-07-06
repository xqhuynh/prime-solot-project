import React from "react";
import "./Testimonial.css";

import Savon from "./images/savon.jpeg";

function Testimonial() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* Carousel */}
      <h1 className="reviews-header">Testimonials</h1>
    </div>
  );
}

export default Testimonial;
