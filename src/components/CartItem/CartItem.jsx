import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartItem.css";

function CartItem({ item }) {
  return (
    <>
      <tr>
        <td className="cart-row-data">
          <img className="cart-item-img " src={item.image} alt={item.name} />
        </td>
        <td className="cart-row-data">
          <p>{item.name}</p>
        </td>
        <td className="cart-row-data">
          <p>{item.price}</p>
        </td>
        <td className="cart-row-data">
          <p>1</p>
        </td>
        <td className="cart-row-data">
          <p>
            <button>
              <DeleteIcon className="remove-icon" />
            </button>
          </p>
        </td>
        <td className="cart-row-data">
          <p>{item.price}</p>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
