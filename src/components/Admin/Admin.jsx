import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";
import AdminCakesList from "../AdminCakesList/AdminCakesList";
import AddItemForm from "../AddItemForm/AddItemForm";

function Admin() {
  // Bring in 'orders' from redux store
  const orders = useSelector((store) => store.orders);
  const dispatch = useDispatch();

  // useEffect to refresh inventory data after delete
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
      <AddItemForm />
      <div className="tables-container">
        {/* Orders Table */}
        <div id="admin">
          <h3>Orders Table</h3>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Date Ordered</th>
                <th>Cake Name</th>
                <th>Customer Name</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* map through orders from redux store */}
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>7/15/22</td>
                  <td>{order.name}</td>
                  <td>Schmedan</td>
                  <td>${order.price}</td>
                  <td>Pending</td>
                  <td>
                    {/* anonymous on click function to dispatch 'DELETE_ORDER_ITEM'
                    target order.id as payload */}
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
          {/* Bring in AdminCaksList component */}
          <AdminCakesList />
        </div>
      </div>
    </>
  );
}

export default Admin;
