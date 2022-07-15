import React from "react";
import "./AddItemForm.css";

function AddItemForm() {
  return (
    <>
      <h2 className="admin-header-title">Admin Page View</h2>

      {/* Cake input */}
      <div className="admin-container">
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
          <input type="submit" value="Add Cake" className="admin-inputs" />
        </form>
      </div>
    </>
  );
}

export default AddItemForm;
