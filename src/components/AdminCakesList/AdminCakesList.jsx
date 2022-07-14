import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function AdminCakesList({ cake }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <Link to={`/cakes/${cake.id}/edit`}>Edit</Link>
      </td>
      <td>{cake.id}</td>
      <td>${cake.price}</td>
      <td>{cake.description}</td>
      <td>
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

export default AdminCakesList;
