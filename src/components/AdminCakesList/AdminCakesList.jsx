import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminCakesItem from "../AdminCakesItem/AdminCakesItem";

function AdminCakesList({}) {
  const cakes = useSelector((store) => store.cakes);

  return (
    <div className="tables-container">
      {/* Inventory Table */}
      <div id="admin">
        <h3>Inventory Table</h3>

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
