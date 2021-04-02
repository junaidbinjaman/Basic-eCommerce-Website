import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-1">
          <h4>Practice</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            nemo similique voluptas nostrum temporibus magni praesentium esse
            explicabo totam assumenda. const element{" "}
          </p>
        </div>
        <div className="footer-2">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contct Us</li>
          </ul>
        </div>
        <div className="footer-2">
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
            <li>Daily Blog</li>
            <li>Contct Us</li>
          </ul>
        </div>
        <div className="footer-2">
          <ul>
            <li>Login TO Website</li>
            <li>Add a Post</li>
            <li>Report a Bug</li>
            <li>Contct Us</li>
          </ul>
        </div>
      </div>
      {/* footer Section start here*/}
      <div className="bottom-footer">
        <div className="b-left">
          <p>
            <small>@All right Reserved</small>
          </p>
        </div>
        <div className="b-right">
          <p>
            <small>Developed by jwolt At 3/24/2020</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
