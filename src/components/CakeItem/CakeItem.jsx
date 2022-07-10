import React from "react";
import { Link } from "react-router-dom";
import "./CakeItem.css";

function CakeItem({ item }) {
  return (
    <div>
      <Link className="item-link" to={`/cakes/${item.id}`}>
        <div className="cake-card">
          <img className="cake-img" src={item.image} />
        </div>
        <div className="cake-name">{item.name}</div>
        <div className="cake-price">${item.price}</div>
        <span className="cake-buttons">
          <button className="view-item">View Cake</button>
        </span>
      </Link>
    </div>
  );
}

export default CakeItem;
