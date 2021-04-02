import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const handleAddProduct = () => {
    const title = document.getElementById("ptoduct-title").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image-url").value;
    const description = document.getElementById("product-description").value;

    const product = {
      title,
      category,
      price,
      image,
      description,
    };
    console.log(product);

    fetch("https://young-retreat-05427.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("product added Successfully");
        }
      });

    document.getElementById("ptoduct-title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image-url").value = "";
    document.getElementById("product-description").value = "";
  };

  return (
    <div>
      <div>
        <div className="app-product-area">
          <form action="">
            <div>
              <input
                type="text"
                id="ptoduct-title"
                placeholder="Product Title"
              />
            </div>{" "}
            <div className="name">
              <div className="Category">
                <input id="category" type="text" placeholder="Category" />
              </div>{" "}
              <div className="quantity">
                <input id="price" type="number" placeholder="$Price" />
              </div>{" "}
            </div>{" "}
            <div>
              <input type="url" id="image-url" placeholder="Image URL" />
            </div>{" "}
            <div>
              <textarea
                id="product-description"
                placeholder="Product Description"
              />
            </div>{" "}
            <div className="button">
              <button onClick={handleAddProduct}> Add Product </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default AddProduct;
