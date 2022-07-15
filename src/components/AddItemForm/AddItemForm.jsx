import React from "react";
import "./AddItemForm.css";

function AddItemForm() {
  return (
    <>
      {/* Cake input */}
      <div className="admin-container">
        <h2>Admin Page View</h2>
        <h3>Add Cake</h3>
        <form>
          <label>Name</label>
          <input className="admin-inputs" />
          <label>Price</label>
          <input className="admin-inputs" />
          <label>Upload Photo</label>
          <input className="admin-inputs" />

          <div>
            <p>Description</p>
            <textarea className="admin-inputs" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddItemForm;
