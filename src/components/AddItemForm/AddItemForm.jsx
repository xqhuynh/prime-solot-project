import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddItemForm.css";

function AddItemForm() {
  const dispatch = useDispatch();
  // useState to store inputs
  const [cakeName, setCakeName] = useState("");
  const [cakePrice, setCakePrice] = useState("");
  const [cakeDescription, setCakeDescription] = useState("");
  const [cakeImage, setCakeImage] = useState("");

  // function to handle submit button, dispatch 'ADD_CAKE'
  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: "ADD_CAKE",
      payload: {
        name: cakeName,
        price: cakePrice,
        description: cakeDescription,
        image: cakeImage,
      },
    });

    // Clear input fields after submit
    setCakeName("");
    setCakePrice("");
    setCakeDescription("");
    setCakeImage("");
  };

  return (
    <>
      <h2 className="admin-header-title">Admin Page View</h2>

      {/* Cake input */}
      <div className="admin-container">
        <h3>Add Cake</h3>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            onChange={(event) => setCakeName(event.target.value)}
            value={cakeName}
            className="admin-inputs"
          />

          <label>Price</label>
          <input
            onChange={(event) => setCakePrice(event.target.value)}
            value={cakePrice}
            className="admin-inputs"
          />
          <label>Upload Photo</label>
          <input
            onChange={(event) => setCakeImage(event.target.value)}
            value={cakeImage}
            className="admin-inputs"
          />

          <div>
            <p>Description</p>
            <textarea
              onChange={(event) => setCakeDescription(event.target.value)}
              value={cakeDescription}
              className="admin-inputs"
            />
          </div>
          <input type="submit" value="Add Cake" className="admin-inputs" />
        </form>
      </div>
    </>
  );
}

export default AddItemForm;
