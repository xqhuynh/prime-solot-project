import React from "react";
import "./SuccessPage.css";
import { Link } from "react-router-dom";
import CartSuccess from "./cart-success.jpeg";

function SuccessPage() {
  return (
    <>
      <div className="success-container">
        <img src={CartSuccess} alt="Success" />
        <h2>Order Successful!!!</h2>
        <h4>You will receive a confirmation email shortly. </h4>
        <h4>Thank you for shopping at Sweet Surrender!</h4>
        <Link to={`/`}>
          <button className="success-btn shop-button">Continue Shopping</button>
        </Link>
      </div>
    </>
  );
}

export default SuccessPage;
