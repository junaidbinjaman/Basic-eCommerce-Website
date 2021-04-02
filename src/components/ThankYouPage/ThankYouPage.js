import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import "./ThankYouPage.css";

const ThankYouPage = () => {
  const [selectedProduct, setSelectedProduct] = useContext(UserContext);
  const { productId } = selectedProduct;
  const [orderInfo, setorderInfo] = useState([]);

  useEffect(() => {
    fetch(`https://young-retreat-05427.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setorderInfo(data[0]);
      });
  }, []);

  const {
    title,
    _id,
    address,
    email,
    orderInvoice,
    zipCode,
    firstName,
    price,
    image,
  } = orderInfo;

  return (
    <div className="thank-you-page-main-section">
      <h1>Thank You Mr: {firstName} For your Order</h1>
      <h1>
        <small>You have ordered:</small> {title}
      </h1>
      <img src={image} width="200px" height="200px" alt="" />
      <h1>
        <small>Price:</small> ${price}
      </h1>
      <h1>
        <small>Please review your delivery address:</small>:{" "}
        {(address, zipCode)}
      </h1>
      <h1>
        <small>We will continue updating you about your delivery at:</small>:{" "}
        {email}
      </h1>
      <h1>
        <small>
          If you need any help please let us know with you order ID:{" "}
        </small>
        : {_id}
      </h1>
      <h1>
        <small>Here is your order invoice:</small>:
      </h1>
      <p>{orderInvoice}</p>
    </div>
  );
};

export default ThankYouPage;
