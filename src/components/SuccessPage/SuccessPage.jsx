import React from "react";
import "./SuccessPage.css";
import { Link } from "react-router-dom";
import CartSuccess from "./cart-success.jpeg";
import { useDispatch } from "react-redux";

function SuccessPage() {
  const dispatch = useDispatch();

  // onClick handler to dispatch 'FETCH_SMS' and call Twilio api
  // for sms notification
  const onClickHandler = () => {
    dispatch({
      type: "FETCH_SMS",
    });
  };

  return (
    <>
      <div className="success-container">
        <img className="cart-success" src={CartSuccess} alt="Success" />
        <h2>Order Successful!!!</h2>
        <h4>You will receive a confirmation email shortly. </h4>
        <h4>Thank you for shopping at Sweet Surrender!</h4>
        <Link to={`/`}>
          <button onClick={onClickHandler} className="success-btn shop-button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  );
}

export default SuccessPage;
