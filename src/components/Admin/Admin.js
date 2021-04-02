import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import EditProduct from "../EditProduct/EditProduct";
import ManageProduct from "../ManageProduct/ManageProduct";

import "./Admin.css";

const Admin = () => {
  return (
    <Router>
      <div className="admin-section">
        <div className="admin-side-bar">
          <AdminSideBar> </AdminSideBar>
        </div>
        <div>
          <Switch>
            <Route path="/admin/manage">
              <ManageProduct />
            </Route>
            <Route path="/admin/addProduct">
              <AddProduct />
            </Route>
            <Route path="/admin/editProduct">
              <EditProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Admin;
