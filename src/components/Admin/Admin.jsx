import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";

function Admin() {
  // Bring in 'cakes' from redux store
  const cakes = useSelector((store) => store.cakes);
  const orders = useSelector((store) => store.orders);
  const dispatch = useDispatch();

  // useEffect to refresh inventory items after delete
  useEffect(() => {
    dispatch({
      type: "FETCH_CAKES",
    });
  }, []);

  // useEffect to fetch orders data on page load
  useEffect(() => {
    dispatch({
      type: "FETCH_ORDERS",
    });
  }, []);

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

      <div className="tables-container">
        {/* Orders Table */}
        <div id="admin">
          <h3>Orders Table</h3>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Item</th>
                <th>Customer Name</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>Customer Name</td>
                  <td>${order.price}</td>
                  <td>Placeholder</td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "DELETE_ORDER_ITEM",
                          payload: { id: order.id },
                        })
                      }
                      className="inventory-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Inventory Table */}
          <div id="admin">
            <h3>Inventory Table</h3>

            <table>
              <tbody>
                <tr>
                  <th>Edit</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Delete</th>
                </tr>
              </tbody>

              <tbody>
                {cakes.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <button className="inventory-button">Edit</button>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "DELETE_ITEM",
                            payload: { id: item.id },
                          })
                        }
                        className="inventory-button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Orders Table */}
    </>
  );
}

export default Admin;
