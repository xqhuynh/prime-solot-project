import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

import Nav from "react-bootstrap/Nav";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function Navbar() {
  const user = useSelector((store) => store.user);

  return (
    <div>
      <div className="nav-container">
        {/* If no user is logged in, show these links */}
        {!user.id && (
          <Nav defaultActiveKey="/home" as="ul">
            {/* Clicking on logo will take user /home */}
            <Link className="home-link" to="/home">
              <img className="logo" src="./images/logo3.png" alt="logo" />
            </Link>

            <Nav.Item as="li">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/home/#shop">Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-3">About</Nav.Link>
            </Nav.Item>
            <div className="profile-cart">
              <Link to="/login">
                <AccountCircleRoundedIcon className="profile" />
              </Link>
              <ShoppingCartRoundedIcon className="cart" />
            </div>
          </Nav>
        )}

        {/* if user is logged in, show these links */}
        {user.id && (
          <Nav defaultActiveKey="/home" as="ul">
            {/* Clicking on logo will take user /home */}
            <Link className="home-link" to="/home">
              <img className="logo" src="./images/logo3.png" alt="logo" />
            </Link>
            <Nav.Item as="li">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="#shop">Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">About</Nav.Link>
            </Nav.Item>
            {/* Profile and cart icon links */}
            <div className="profile-cart">
              <Link to="/login">
                <AccountCircleRoundedIcon className="profile" />
              </Link>
              {/* Will need link to checkout page */}
              <ShoppingCartRoundedIcon className="cart" />
            </div>
          </Nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
