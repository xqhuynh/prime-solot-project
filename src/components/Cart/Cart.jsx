import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const cart = useSelector((store) => store.cart);

  return (
    <>
      <h2>Cart</h2>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <Link to="/checkout">
        <button className="checkout-button">Checkout</button>
      </Link>
    </>
  );
}

export default Cart;
