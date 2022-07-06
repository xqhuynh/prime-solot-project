import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CakesList.css";
import { Link } from "react-router-dom";

function CakesList() {
  const dispatch = useDispatch();
  const cakes = useSelector((store) => store.cakes);

  useEffect(() => {
    dispatch({
      type: "FETCH_CAKES",
    });
  }, []);

  return (
    <>
      <h2>Cakes List</h2>
      <section className="cakes">
        {cakes.map((cake) => {
          return (
            <ul key={cake.id}>
              <li>
                {cake.name} costs {cake.price}.{cake.description}
              </li>
            </ul>
          );
        })}
      </section>
    </>
  );
}

export default CakesList;
