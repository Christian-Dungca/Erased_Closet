import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ProductsPage from "./products/pages/ProductsPage/ProductsPage";
import ProductPage from "./products/pages/ProductPage/ProductPage";
import AdminPage from "./products/pages/Admin/Admin";
import LoginPage from "./users/pages/Login";
import SignUpPage from "./users/pages/SignUp";
import * as actions from "./store/actions/index";
import styles from "./App.module.scss";

const App = ({ products, fetchProducts}) => {
  const [isCartOpen, setCart] = useState(false);
  const [productList, setProductList] = useState(null); 
  
  useEffect(() => {
    const getInventory = async () => {
      try {
        const res = await fetchProducts(); // fetches all products and stores them in store// await all products from store in new variable
        setProductList(res);
      } catch (err) {
        console.log(err);
      }
    };
    getInventory();
  }, [fetchProducts]);
  
  const handleCart = () => {
    setCart(!isCartOpen);
  };
  
  console.log("products:", products); 
  console.log('product list', productList); 

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
          <SignUpPage />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(actions.fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
