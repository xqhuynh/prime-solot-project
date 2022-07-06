import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CakesList.css";
import { Link } from "react-router-dom";

function CakesList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_CAKES",
    });
  }, []);

  return (
    <>
      <h2>Cakes List</h2>
      {/* <section className="cakes">
        {cakes.map(cake => {
            return (
                <div key={cake.id} >
                    <Link to={`/cakes/${cake.id}`}>
                        <h3>{cake.name}</h3>
                        <img src={cake.img} alt={cake.name} />
                    </Link>
                </div>
            )
        })}
      </section> */}
    </>
  );
}

export default CakesList;
