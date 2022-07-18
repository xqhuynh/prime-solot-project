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

  const autoComplete = () => {
    setCakeName("USA");
    setCakePrice("40.99");
    setCakeDescription(
      "This USA cake is perfect for Independence Day or for when you want to show off your patriotism. USA! USA! USA!"
    );
    setCakeImage("images/usa.jpeg");
  };

  return (
    <>
      <h2 className="admin-header-title">Admin Page</h2>
      <hr />

      {/* Cake input */}
      <div className="admin-container">
        <h3 className="add-cake-text" onClick={autoComplete}>
          Add Cake
        </h3>
        <form onSubmit={handleSubmit}>
          <label className="text">Name</label>
          <input
            onChange={(event) => setCakeName(event.target.value)}
            value={cakeName}
            className="admin-inputs"
          />

          <label className="text">Price</label>
          <input
            onChange={(event) => setCakePrice(event.target.value)}
            value={cakePrice}
            className="admin-inputs"
          />
          <label className="text">Upload Photo</label>
          <input
            onChange={(event) => setCakeImage(event.target.value)}
            value={cakeImage}
            className="admin-inputs"
          />

          <div>
            <p className="desc-text">Description</p>
            <textarea
              onChange={(event) => setCakeDescription(event.target.value)}
              value={cakeDescription}
              className="admin-inputs add-cake-description"
            />
          </div>
          <input
            type="submit"
            value="Add Cake"
            className="admin-inputs add-cake-btn"
          />
        </form>
      </div>
    </>
  );
}

export default AddItemForm;
