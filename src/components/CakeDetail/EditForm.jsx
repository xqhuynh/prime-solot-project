import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function EditForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams(); // { id: 2 }
  const cakes = useSelector((store) => store.cakeDetail);

  // useEffect to dispatch 'FETCH_ACTIVE_CAKE' on page load
  useEffect(() => {
    dispatch({
      type: "FETCH_ACTIVE_CAKE",
      payload: Number(params.id),
    });
  }, [params.id]);

  return (
    <>
      <h2>Update Cake</h2>
      <h2>{cakes.name}</h2>
    </>
  );
}

export default EditForm;
