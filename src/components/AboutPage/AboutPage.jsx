import React from "react";
import "./AboutPage.css";
import Caroline from "../Utils/caroline.jpeg";
import Baking from "../Utils/baking.jpg";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about-container">
      <h2 className="about-header">Our Sweet Story</h2>
      <hr className="about-line" />
      <div className="top-content">
        <p className="top-text">
          Sweet Surrender was born out of our pure desire to share our cakes
          with everyone. We have witnessed on numerous occasions where the same,
          boring cakes would make its way to birthday parties, graduation
          parties, going away parties. The list goes on and on.
          <br />
          <br />
          We wanted to showcase our intricate cakes and convey our message that
          cakes do not have to be boring. Cakes bring everyone together and as
          such cakes should be a priority for all gatherings.
          <br />
          <br />
          Cakes are special. Every birthday, every celebration ends with
          something swee, a cake, and people remember. It's all about the
          memories.
        </p>
        <img className="baker-img" src={Baking} alt="baker" />
      </div>

      <div className="bottom-content">
        <img className="caroline-img" src={Caroline} alt="Caroline" />
        <div className="bottom-desc">
          <h3 className="owner-name">Caroline Huynh</h3>
          <h4 className="owner-title">Accountant by day, baker by night</h4>

          <p className="bottom-text">
            Caroline is the owner and sole baker of Sweet Surrender. Her passion
            and dedication for baking has brought her to create cakes for family
            and friends. Now she wants to make it available to everyone. This is
            the idea behind Sweet Surrender.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
