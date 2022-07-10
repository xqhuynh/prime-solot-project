import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CakeItem from "../CakeItem/CakeItem";
import "./CakesList.css";
// Will need Link for cake details view
import { Link, useParams } from "react-router-dom";

function CakesList() {
  const dispatch = useDispatch();
  const params = useParams();
  const cakes = useSelector((store) => store.cakes);

  // useEffect to fetch cakes on page load
  // dispatch 'FETCH_CAKES' to trigger saga
  useEffect(() => {
    dispatch({
      type: "FETCH_CAKES",
    });
  }, []);

  const addCarthandle = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: Number(params.id),
    });
  };

  return (
    <>
      <h2 id="shop" className="cake-header">
        Cake Collection
      </h2>
      <form className="sort">
        <label className="sort-name">Sort</label>
        <select className="drop-down">
          <option value="best-selling">Best Selling</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="price">Price: Low to High</option>
        </select>
      </form>

      <section className="cake-container">
        {cakes.map((cake) => {
          return (
            <div key={cake.id}>
              <div className="cake-card">
                <img className="cake-img" src={cake.image} />
              </div>

              <div className="cake-name">{cake.name}</div>
              <div className="cake-price">${cake.price}</div>
              <span className="cake-buttons">
                <Link to={`/cakes/${cake.id}`}>
                  <button className="view-item">View Item</button>
                </Link>
                <button onClick={addCarthandle} className="add-to-cart">
                  Add to cart
                </button>
              </span>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CakesList;
