import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CakeDetail() {
  const dispatch = useDispatch();
  // Will need useParams to target individual cake item with id
  const params = useParams();
  // Will need useSelector after active cake is retrieved from store

  // useEffect to dispatch 'FETCH_ACTIVE_CAKE' on page load
  useEffect(() => {
    dispatch({
      type: "FETCH_ACTIVE_CAKE",
      payload: Number(params.id),
    });
  }, [params.id]);

  return (
    <>
      <h2>Cake Details View</h2>
    </>
  );
}

export default CakeDetail;
