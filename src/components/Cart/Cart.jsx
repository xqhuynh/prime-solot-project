import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import TextField from "@mui/material/TextField";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Cart() {
  const cakes = useSelector((store) => store.cakes);

  return (
    <>
      <h2 className="checkout-header">Secure Checkout</h2>
      <div className="cust-info-container">
        {/* Customer address  */}
        <div className="checkout-container">
          <h4 className="step-one">1. Delivery Address</h4>
          <div className="input">
            <p className="checkout-label">Name</p>
            <TextField variant="outlined" size="small" />
          </div>

          <div className="input">
            <p className="checkout-label">Email</p>
            <TextField variant="outlined" size="small" />
          </div>

          <div className="input">
            <p className="checkout-label">Phone</p>
            <TextField variant="outlined" size="small" />
          </div>

          <div className="input">
            <p className="checkout-label">Address</p>
            <TextField variant="outlined" size="small" />
          </div>

          <div className="input">
            <p className="checkout-label">City</p>
            <TextField variant="outlined" size="small" />
          </div>

          <div className="input">
            <p className="checkout-label">State</p>
            <TextField variant="outlined" size="small" />
          </div>

          <div className="input">
            <p className="checkout-label">ZIP</p>
            <TextField variant="outlined" size="small" />
          </div>
        </div>

        {/* Payment and order info */}
        <div className="checkout-container">
          <h4 className="step-two">2. Payment</h4>
          <div className="payment-card">
            <CreditCardIcon className="card-icon" />
            <p className="card-text">Card</p>
            <ArrowForwardIosIcon className="arrow" />
          </div>

          <div className="paypal-card">
            <CreditCardIcon className="card-icon" />
            <p className="card-text">PayPal</p>
            <ArrowForwardIosIcon className="paypal-arrow" />
          </div>
          <div className="sales-info">
            <p>ORDER SUMMARY</p>
            <div className="cake-quantity">
              <p>1 x {cakes[0].name}</p>
              <p>${cakes[0].price}</p>
            </div>
          </div>

          <button className="payment-btn">Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
