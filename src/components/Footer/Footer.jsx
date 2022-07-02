import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <>
      <div className="footer-container">
        {/* Left footer  */}
        <div className="footer-left">
          <div className="follow-us">
            <h4>Follow Us</h4>
          </div>
          <div className="social-media">
            <FacebookIcon className="footer-icon" />
            <InstagramIcon className="footer-icon" />
            <TwitterIcon className="footer-icon" />
          </div>
        </div>
        {/* Middle footer */}
        <div className="footer-middle">
          <h3>&copy; Huynh Designs</h3>
        </div>
        {/* Right footer */}
        <div className="footer-right">
          <h4 className="sign-up">Sign up for our newsletter</h4>
          <div className="newsletter">
            <input className="footer-email" placeholder="EMAIL" />
            <button className="sign-up-button">SIGN UP</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
