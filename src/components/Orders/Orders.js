import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../App";
import AllOrders from "./AllOrders/AllOrders";
import "./Orders.css";

const Orders = () => {
  const [logedInUser] = useContext(LoginContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/orders/${logedInUser.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="order-list-page">
      <div className="order-list-header">
        <div>
          <h2>Order ID</h2>
        </div>
        <div>
          <h2>Product Title</h2>
        </div>
        <div>
          <h2>Price</h2>
        </div>
      </div>
      {orders.map((order) => (
        <AllOrders order={order}></AllOrders>
      ))}
    </div>
  );
};

export default Orders;
