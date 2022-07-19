import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminCakesItem from "../AdminCakesItem/AdminCakesItem";
import "../Admin/Admin.css";

function AdminCakesList({}) {
  // Bring in cakes list from redux store
  const cakes = useSelector((store) => store.cakes);

  return (
    <div className="tables-container">
      {/* Inventory Table */}
      <div id="admin">
        <h3 className="inventory-header">Inventory Table</h3>

        <table>
          <thead>
            <tr>
              <th>Edit</th>
              <th>Item</th>
              <th>Price</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {/* map through cakes from redux store and pass prop to AdminCakesItem */}
            {cakes.map((cake) => (
              <AdminCakesItem key={cake.id} cake={cake} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCakesList;
