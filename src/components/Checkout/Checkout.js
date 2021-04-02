import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import "./Checkout.css";

const Checkout = (event) => {
  const [selectedProduct] = useContext(UserContext);
  const { id, title, price, category, image } = selectedProduct;
  const [checkoutInfo, setCheckoutInfo] = useState({});

  const history = useHistory();
  const checkoutBtn = (event) => {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const address2 = document.getElementById("address-2").value;
    const zipCode = document.getElementById("zid-code").value;
    const areaCode = document.getElementById("area-code").value;
    const houseNumber = document.getElementById("house-number").value;
    const phone = document.getElementById("phone").value;
    const orderInvoice = document.getElementById("order-invoice").value;

    const clientInfo = {
      ...selectedProduct,
      firstName,
      lastName,
      email,
      address,
      address2,
      zipCode,
      areaCode,
      houseNumber,
      phone,
      orderInvoice,
    };

    fetch("https://young-retreat-05427.herokuapp.com/placeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your order Placed Successfully");
      });
    history.push("/thankYouPage");
  };
  return (
    <div>
      <div className="cart-area">
        <div className="cart-child">
          <img width="100px" height="100px" src={image} alt="" />{" "}
        </div>{" "}
        <div className="cart-child">
          <h1> {title} </h1>{" "}
        </div>{" "}
        <div className="cart-child">
          <h1> $ {price} </h1>{" "}
        </div>{" "}
      </div>{" "}
      {/*Checkout area starts from here */}{" "}
      <div className="login-area">
        <form action="">
          <div className="name">
            <div className="firstName">
              <input id="firstName" type="text" placeholder="First Name" />
            </div>{" "}
            <div className="lastName">
              <input id="lastName" type="text" placeholder="Last Name" />
            </div>{" "}
          </div>{" "}
          <div>
            <input type="email" id="email" placeholder="Email" />
          </div>{" "}
          <div>
            <input type="text" id="address" placeholder="Address" />
          </div>{" "}
          <div>
            <input type="text" id="address-2" placeholder="Address 2" />
          </div>{" "}
          <div className="address-detail">
            <div className="zid-code">
              <input id="zid-code" type="text" placeholder="Zip Code" />
            </div>{" "}
            <div className="area-code">
              <input id="area-code" type="text" placeholder="Area code" />
            </div>{" "}
            <div className="house-number">
              <input id="house-number" type="text" placeholder="House Number" />
            </div>{" "}
          </div>{" "}
          <div>
            <input type="text" id="phone" placeholder="Phone Number" />
          </div>{" "}
          <div>
            <textarea id="order-invoice" placeholder="Order invoice" />
          </div>{" "}
          <div className="button">
            <button onClick={checkoutBtn}> Checkout Now </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Checkout;
