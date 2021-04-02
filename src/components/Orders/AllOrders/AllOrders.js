import React from "react";
import "./AllOrders.css";
const AllOrders = (props) => {
  const { title, price, _id } = props.order;
  console.log(props);
  return (
    <div className="order-list">
      <div>
        <h2>{_id.substring(20, 24)}</h2>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default AllOrders;
