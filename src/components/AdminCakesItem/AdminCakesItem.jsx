import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../Admin/Admin.css";

// Bring in 'cake' prop from AdminCakesList
function AdminCakesItem({ cake }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        {/* Link 'Edit' to /cakes/:id/edit view which is EditForm */}
        <Link className="edit-button" to={`/cakes/${cake.id}/edit`}>
          <p className="edit-text">Edit</p>
        </Link>
      </td>
      <td>{cake.name}</td>
      <td>${cake.price}</td>
      <td>{cake.description}</td>
      <td>
        {/* anonymous onClick function to dispatch 'DELETE_ITEM' on inventory table
        payload should target cake.id and cake.name */}
        <button
          onClick={() =>
            dispatch({
              type: "DELETE_ITEM",
              payload: { id: cake.id, name: cake.name },
            })
          }
          className="inventory-button"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default AdminCakesItem;
