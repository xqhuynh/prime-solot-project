import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CakeDetail.css";

function CakeDetail() {
  const dispatch = useDispatch();
  // Will need useParams to target individual cake item with id
  const params = useParams();
  // Set quantity state w/useState
  const [qty, setQty] = useState(1);
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

  const addCarthandle = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: Number(params.id),
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
