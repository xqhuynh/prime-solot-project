import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CakesList.css";
// Will need Link for cake details view
import { Link } from "react-router-dom";

function CakesList() {
  const dispatch = useDispatch();
  const cakes = useSelector((store) => store.cakes);

  // useEffect to fetch cakes on page load
  // dispatch 'FETCH_CAKES' to trigger saga
  useEffect(() => {
    dispatch({
      type: "FETCH_CAKES",
    });
  }, []);

  return (
    <>
      <h2 className="cake-header">Cake Collection</h2>
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
              <button className="add-to-cart">Add to cart</button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CakesList;
