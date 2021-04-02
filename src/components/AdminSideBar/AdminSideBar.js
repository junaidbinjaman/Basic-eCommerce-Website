import React from "react";
import { Link } from "react-router-dom";
import Grid from "../../img/grid 1.png";
import Plus from "../../img/plus 1.png";
import Edit from "../../img/edit 1.png";
import "./AdminSideBar.css";

const AdminSideBar = () => {
  return (
    <div>
      <Link to="/admin/manage">
        <div className="manage">
          <img src={Grid} alt="" />
          <h1>Manage Product</h1>
        </div>
      </Link>
      <Link to="/admin/addProduct">
        <div className="manage">
          <img src={Plus} alt="" />
          <h1>Add A Product</h1>
        </div>
      </Link>

      <Link to="/admin/editProduct">
        <div className="manage">
          <img src={Edit} alt="" />
          <h1>Add A Product</h1>
        </div>
      </Link>
    </div>
  );
};

export default AdminSideBar;
