import React, { useState } from "react";
import "./DashboardProduct.css";
import Delete from "../../img/Group 33150.png";
import edit from "../../img/Group 307.png";

const DashboardProduct = (props) => {
  const deleteProduct = (id) => {
    fetch(`https://young-retreat-05427.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deveted suiccessfully");
      });
  };
  const { title, category, price, _id } = props.product;
  return (
    <div>
      <div className="dashboard-product-manager">
        <div>
          <h2>{title.substring(0, 29)}...</h2>
        </div>
        <div>
          <h2>{category}</h2>
        </div>
        <div>
          <h2>${price}</h2>
        </div>
        <div className="action">
          <img
            src={Delete}
            width="30px"
            height="30px"
            onClick={() => {
              deleteProduct(_id);
            }}
            alt=""
          />
          <img src={edit} width="30px" height="30px" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
