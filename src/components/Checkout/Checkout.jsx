import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";
import TextField from "@mui/material/TextField";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckoutItem from "../CheckoutItem/CheckoutItem";

function Checkout() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // Dispatch action type ADD_ORDER
  const handlePlaceOrder = () => {
    dispatch({
      type: "ADD_ORDER_ITEMS",
      payload: cart,
    });
  };

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

          <p>ORDER SUMMARY</p>
          <div>
            {cart.map((item) => {
              return <CheckoutItem key={item.id} item={item} />;
            })}
          </div>

          <p>Total: {}</p>
          <button onClick={handlePlaceOrder} className="payment-btn">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
