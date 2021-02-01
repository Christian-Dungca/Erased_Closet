import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

import ProductsPage from "./products/pages/ProductsPage/ProductsPage";
import Navigation from "./shared/components/Navigation/Navigation";
import ProductPage from "./products/pages/ProductPage/ProductPage";
import AdminPage from "./products/pages/Admin/Admin";
import LoginPage from './users/pages/Login';
import SignUpPage from './users/pages/SignUp';
import * as actions from "./store/actions/index";
import styles from "./App.module.scss";
import SignupPage from "./users/pages/SignUp";

const App = ({fetchProducts}) => {
  const [isCartOpen, setCart] = useState(false);
  const [productList, setProductList] = useState(null)

  useEffect(() => {
    const getInventory = async () => {
      try {
        console.log("trying");
        // loading
        await fetchProducts(); // fetches all products and stores them in store
        // await all products from store in new variable
      } catch (err) {
        console.log(err);
      }
    };
    getInventory();
  }, []);

  const handleCart = () => {
    setCart(!isCartOpen);
  };

  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/" exact>
          <ProductsPage handleCart={handleCart} isCartOpen={isCartOpen} />
        </Route>
        <Route path="/admin" exact>
          <AdminPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(actions.fetchProducts()),
  };
};

export default connect(null, mapDispatchToProps)(App);
