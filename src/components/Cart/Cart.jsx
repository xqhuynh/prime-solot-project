import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const cart = useSelector((store) => store.cart);

  // Calculate cart total and parseFloat to get decimal places
  let sum = 0;
  for (let amount of cart) {
    sum += parseFloat(amount.price);
  }

  return (
    <>
      <h2 className="cart-header">My cart</h2>
      <hr className="cart-line" />
      <div className="cart-table-container">
        <table>
          <thead>
            <tr>
              <th className="cart-col-title">Image</th>
              <th className="cart-col-title">Item</th>
              <th className="cart-col-title">Price</th>
              <th className="cart-col-title">Quantity</th>
              <th className="cart-col-title">Remove</th>
              <th className="cart-col-title">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* map over cart and pass prop to CartItem component */}
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </tbody>
        </table>
      </div>

      <div className="cart-total-container">
        <h4 className="cart-total">CART TOTAL</h4>

        <p className="sum-text">${sum.toFixed(2)}</p>
      </div>

      <Link to="/checkout">
        <button className="checkout-button">Checkout</button>
      </Link>
    </>
  );
}

export default Cart;
