import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Loader from "../../img/1_9EBHIOzhE1XfMYoKz1JcsQ.gif";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://young-retreat-05427.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="product-grid">
        {" "}
        {products.length < 1 && (
          <img className="home-page-preloader" src={Loader} alt="" />
        )}{" "}
        {products.map((product) => (
          <Product product={product} id={product._id}>
            {" "}
          </Product>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
