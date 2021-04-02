import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import "./Product.css";

const Product = (props) => {
  const [selectedProduct, setSelectedProduct] = useContext(UserContext);
  const { title, image, price, category, _id } = props.product;
  let history = useHistory();

  const buyProductbtn = (productId, title, price, category, image) => {
    setSelectedProduct({ productId, title, price, category, image });
    history.push("/checkout");
  };

  return (
    <div className="product">
      <img width="330px" height="320px" src={image} alt="" />
      <h2>{title.substring(0, 17)}...</h2>
      <p>{category}</p>
      <div className="innerProduct">
        <div className="pdPrice">
          <p>${price}</p>
        </div>
        <div className="pdButton">
          <button
            onClick={() => {
              buyProductbtn(_id, title, price, category, image);
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
