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
      <div className="top-content">
        <p className="top-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis
          non orci eu imperdiet. Duis mattis turpis nec arcu lacinia volutpat.
          Vestibulum sed nisl odio. Proin suscipit lobortis varius. Phasellus
          placerat elit elit, vitae bibendum magna egestas tincidunt.
          Suspendisse at scelerisque lorem. Vivamus ut dolor non nisl feugiat
          ultrices eget eu lacus.
        </p>
        <img className="baker-img" src={Baking} alt="baker" />
      </div>

      <div className="bottom-content">
        <img className="caroline-img" src={Caroline} alt="Caroline" />
        <div className="bottom-desc">
          <h3 className="owner-name">Caroline Huynh</h3>
          <h4 className="owner-title">Accountant by day, baker by night</h4>
          <hr />
          <p className="bottom-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mollis non orci eu imperdiet. Duis mattis turpis nec arcu lacinia
            volutpat. Vestibulum sed nisl odio. Proin suscipit lobortis varius.
            Phasellus placerat elit elit, vitae bibendum magna egestas
            tincidunt. Suspendisse at scelerisque lorem. Vivamus ut dolor non
            nisl feugiat ultrices eget eu lacus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
