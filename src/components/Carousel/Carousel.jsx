import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Carousel.css";
// import images from Helpers
import { images } from "../Helpers/CarouselData";

function Carousel() {
  // useState to set carousel images
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="innerCarousel"
          style={{ backgroundImage: `url(${images[currImg].img})` }}
        >
          {/* Create onClick to toggle images */}
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosNewIcon style={{ fontSize: 30 }} />
          </div>

          <div className="center">
            {/* <h2 className="carousel-title">{images[currImg].title}</h2>
            <h5 className="carousel-subtitle">{images[currImg].subtitle}</h5> */}
          </div>

          <div
            className="right"
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
