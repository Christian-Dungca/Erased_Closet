import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import ProductsPage from "./products/pages/ProductsPage/ProductsPage";
import Navigation from "./shared/components/Navigation/Navigation";
import ProductPage from "./products/pages/ProductPage/ProductPage";
import AdminPage from "./products/pages/Admin/Admin";
import NewProductPage from "./products/pages/NewProductPage/NewProduct";
import * as actions from "./store/actions/index";
import styles from "./App.module.scss";

const App = ({fetchProducts}) => {
  const [isCartOpen, setCart] = useState(false);
  const [productList, setProductList] = useState(null)

  useEffect(() => {
    const getInventory = async () => {
      try {
        console.log("trying");
        await fetchProducts();
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
        <Route path="/add-product" exact>
          <NewProductPage />
        </Route>
        <Route path="/admin" exact>
          <AdminPage />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
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
