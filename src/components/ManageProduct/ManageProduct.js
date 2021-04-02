import React, { useEffect, useState } from "react";
import DashboardProduct from "../DashboardProduct/DashboardProduct";
import Loader from "../../img/1_9EBHIOzhE1XfMYoKz1JcsQ.gif";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://young-retreat-05427.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="dashboard-product-header">
        <div>
          <h2>Product Name</h2>
        </div>
        <div>
          <h2>Category</h2>
        </div>
        <div>
          <h2>Price</h2>
        </div>
        <div>
          <h2>Action</h2>
        </div>
      </div>
      {products.length < 1 && <img src={Loader} alt="" />}
      {products.map((product) => (
        <DashboardProduct product={product}></DashboardProduct>
      ))}
    </div>
  );
};

export default ManageProduct;
