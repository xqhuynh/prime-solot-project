import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./CakeItem.css";

function CakeItem({ item }) {
  const dispatch = useDispatch();
  const params = useParams();

  const addCarthandle = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: Number(params.id),
    });
  };

  return (
    <div>
      <div className="cake-card">
        <img className="cake-img" src={item.image} />
      </div>
      <div className="cake-name">{item.name}</div>
      <div className="cake-price">${item.price}</div>
      <span className="cake-buttons">
        <Link to={`/cakes/${item.id}`}>
          <button className="view-item">View Item</button>
        </Link>
        <button onClick={addCarthandle} className="add-to-cart">
          Add to cart
        </button>
      </span>
    </div>
  );
}

export default CakeItem;
