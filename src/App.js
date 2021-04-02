import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Deals from "./components/Deals/Deals";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import NotMatch from "./components/NotMatch/ NotMatch";
import Footer from "./components/Footer/Footer";
import { createContext, useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";
import PrivateRoute from "./components/Product/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const LoginContext = createContext();

function App() {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [logedInUser, setLogedInUser] = useState({});

  return (
    <div className="App">
      <Router>
        <LoginContext.Provider value={[logedInUser, setLogedInUser]}>
          <UserContext.Provider value={[selectedProduct, setSelectedProduct]}>
            <div>
              <Header> </Header>{" "}
              <Switch>
                <PrivateRoute path="/orders">
                  <Orders />
                </PrivateRoute>{" "}
                <PrivateRoute path="/admin/manage">
                  <Admin />
                </PrivateRoute>{" "}
                <Route path="/deals">
                  <Deals />
                </Route>{" "}
                <Route path="/login">
                  <Login />
                </Route>{" "}
                <PrivateRoute path="/checkout">
                  <Checkout />
                </PrivateRoute>{" "}
                <Route path="/thankYouPage">
                  <ThankYouPage />
                </Route>{" "}
                <Route exact path="/">
                  <Home />
                </Route>{" "}
                <Route path="*">
                  <NotMatch />
                </Route>{" "}
              </Switch>{" "}
              <Footer />
            </div>{" "}
          </UserContext.Provider>{" "}
        </LoginContext.Provider>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
