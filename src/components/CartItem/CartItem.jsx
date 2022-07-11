import React from "react";
import "./CartItem.css";

function CartItem({ item }) {
  return (
    <>
      <div className="cart-container">
        <div className="cart-img">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="cart-desc">
          <p>{item.name}</p>

          <p>{item.price}</p>
          <p> {item.description}</p>
          <div className="qty-button">
            <button className="minus-button">-</button>
            <p>1</p>
            <button className="plus-button">+</button>
          </div>
          <div>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
