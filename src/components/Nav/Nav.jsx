import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

import Nav from "react-bootstrap/Nav";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

function Navbar() {
  // bring in useSelector for user and cart reducers
  const user = useSelector((store) => store.user);
  const cart = useSelector((store) => store.cart);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

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
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-3">About</Nav.Link>
            </Nav.Item>
            <div className="profile-cart">
              <Link to="/login">
                <IconButton aria-label="profile-icon">
                  <AccountBoxIcon className="profile" />
                </IconButton>
              </Link>
              {/* <Link to="/cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={0} showZero color="primary">
                    <ShoppingCartRoundedIcon className="cart" />
                  </StyledBadge>
                </IconButton>
              </Link> */}
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
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-3">About</Nav.Link>
            </Nav.Item>
            <div className="profile-cart">
              <Link to="/login">
                <IconButton aria-label="profile-icon">
                  <AccountBoxIcon className="profile" />
                </IconButton>
              </Link>
              <Link to="/cart">
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={cart.length}
                    showZero
                    color="primary"
                  >
                    <ShoppingCartRoundedIcon className="cart" />
                  </StyledBadge>
                </IconButton>
              </Link>
            </div>
          </Nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
