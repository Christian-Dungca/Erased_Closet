import React from "react";
import { connect } from "react-redux";

import Navigation from "../../../shared/components/Navigation/Navigation";
import ProductList from "./ProductList/ProductList";
import * as actions from "../../../store/actions/index";
import styles from "./Admin.module.scss";

const Admin = ({ products, fetchProducts }) => {
  return (
    <>
      <Navigation />
      <div className={styles.Admin}>
        <h1> All Inventory (Admin) </h1>
        {products && <ProductList products={products} />}
      </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
