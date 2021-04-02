import React, { useContext } from "react";
import Google from "../../img/google-2038770-1721659.png";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import { LoginContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (firebase.app.length < 1) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const [logedInUser, setLogedInUser] = useContext(LoginContext);

  let { from } = location.state || { from: { pathname: "/" } };
  const handleLogin = (event) => {
    event.preventDefault();
    const firstname = document.getElementById("firstName").value;
    const lastname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(firstname, lastname, email, password);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        setLogedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        setLogedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage, errorCode, email, credential);
      });
  };
  return (
    <div>
      <div className="login-area">
        <form action="">
          <div className="name">
            <div className="firstName">
              <input id="firstName" type="text" placeholder="first name" />
            </div>{" "}
            <div className="lastName">
              <input id="lastName" type="text" placeholder="last name" />
            </div>{" "}
          </div>{" "}
          <div>
            <input type="email" id="email" placeholder="Email" />
          </div>{" "}
          <div>
            <input type="password" id="password" placeholder="Password" />
          </div>{" "}
          <div className="button">
            <button onClick={handleLogin}> Login </button>{" "}
          </div>{" "}
        </form>{" "}
        <p className="info-text">Please login with email and password</p>
        <div onClick={handleGoogleLogin}>
          <span className="social-login">
            <img src={Google} width="40px" height="40px" alt="" />{" "}
            <p> Login With Google </p>{" "}
          </span>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Login;
