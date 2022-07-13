import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CakeDetail.css";

function CakeDetail() {
  const dispatch = useDispatch();
  // Will need useParams to target individual cake item with id
  const params = useParams();
  // Will need useSelector after active cake is retrieved from store
  // calling it cakeDetail
  const cakeDetails = useSelector((store) => store.cakeDetail);

  // useEffect to dispatch 'FETCH_ACTIVE_CAKE' on page load
  useEffect(() => {
    dispatch({
      type: "FETCH_ACTIVE_CAKE",
      payload: Number(params.id),
    });
  }, [params.id]);

  // Dispatch ADD_TO_CART action to store item in cart
  // payload is any info from cakeDetails reducer
  const addCarthandle = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: cakeDetails.id,
        price: cakeDetails.price,
        name: cakeDetails.name,
        image: cakeDetails.image,
        description: cakeDetails.description,
      },
    });
  };

  return (
    <>
      <h2 className="details-header">Cake Details</h2>
      {/* Details container */}
      <div className="details-container">
        <img className="cake-img" src={cakeDetails.image} />
        <div className="details-info">
          <p className="details-name">{cakeDetails.name}</p>
          <p className="details-price">Price: ${cakeDetails.price}</p>
          <p className="process-time">Process Time: 3-5 days</p>
          <p className="desc-header">Description:</p>
          <p className="details-desc">{cakeDetails.description}</p>
          <div className="qty-button">
            <button className="minus-button">-</button>
            <p>1</p>
            <button className="plus-button">+</button>
          </div>
          {/* Buttons */}
          <div className="buttons">
            <button onClick={addCarthandle} className="details-cart">
              Add to cart
            </button>
            <Link to={`/`}>
              <button className="shop-button">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CakeDetail;
