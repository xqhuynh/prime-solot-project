import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "./Cart.css";

function Cart() {
  // Will need useSelector after active cake is retrieved from store
  // calling it cakeDetail
  const cakeDetails = useSelector((store) => store.cakeDetail);
  const cart = useSelector((store) => store.cart);

  return (
    <>
      <h2>Cart</h2>
      <div className="cart-container">
        <div className="cart-card">
          <div className="cart-img">
            <img className="cake-img" src={cakeDetails.image} />
          </div>
          <div className="cart-body">
            <div>{cakeDetails.name}</div>
            <div>{cakeDetails.price}</div>
            <div className="qty-button">
              <button className="minus-button">-</button>
              <p>1</p>
              <button className="plus-button">+</button>
            </div>
            <p>Items in cart: {cart}</p>
          </div>
        </div>
        <button>Continue Shopping</button>
      </div>
    </>
  );
}

export default Cart;
