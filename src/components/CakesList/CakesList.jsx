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
      <h2>Cakes List</h2>
      <section className="cake-container">
        {cakes.map((cake) => {
          return (
            <div>
              <div className="cake-card">
                <img className="cake-img" src={cake.image} />
              </div>
              <div>{cake.name}</div>
              <div>{cake.price}</div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CakesList;
