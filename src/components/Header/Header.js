import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header-left">
        <Link to="/">
          <h2> DAILY BAZER </h2>{" "}
        </Link>{" "}
      </div>{" "}
      <div className="header-right">
        <Link to="/"> Home </Link> <Link to="/orders"> Orders </Link>{" "}
        <Link to="/admin/manage"> Admin </Link> <Link to="/deals"> Deals </Link>{" "}
        <Link to="/login"> Login </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default Header;
