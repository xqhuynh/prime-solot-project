import React from "react";

function CheckoutItem({ item }) {
  return (
    <div>
      {item.name} is {item.price}
    </div>
  );
}

export default CheckoutItem;
