import React from "react";
import "./CartItem.css";

function CartItem({ item }) {
  return (
    <div className="cart-container">
      <div className="cart-img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-desc">
        <p>{item.name}</p>

        <p>{item.price}</p>
        <p> {item.description}</p>
      </div>
    </div>
  );
}

export default CartItem;
