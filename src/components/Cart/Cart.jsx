import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "./Cart.css";

function Cart() {
  // Will need useSelector after active cake is retrieved from store
  // calling it cakeDetail
  const cart = useSelector((store) => store.cart);

  return (
    <>
      <h2>Cart</h2>
      <div className="cart-container">
        <div className="cart-card">
          <div className="cart-img">
            <img className="cake-img" src={cart.image} />
          </div>
          <div className="cart-body">
            <div>{cart.name}</div>
            <div>{cart.price}</div>
            <div className="qty-button">
              <button className="minus-button">-</button>
              <p>1</p>
              <button className="plus-button">+</button>
            </div>
            <p>Items in cart: 0</p>
          </div>
        </div>
        <button>Continue Shopping</button>
      </div>
    </>
  );
}

export default Cart;
