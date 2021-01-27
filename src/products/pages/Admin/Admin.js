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
        <h1> Product Inventory (Admin) </h1>
        <div className={styles.createProductWrapper}>
          <div className={styles.createProductBtn}>
            <h2 className={styles.btnText}> Create </h2>
            <h2 className={styles.btnPlusSymbol}> &#43; </h2>
          </div>
        </div>
        <div className={styles.productTable}>
          {/* <ul className={styles.productRowHeader}> */}
          <li className={styles.header}>product</li>
          <li className={styles.header}>type</li>
          <li className={styles.header}>color</li>
          <li className={styles.header}>price</li>
          <li className={styles.header}>actions</li>
          {/* </ul> */}

          {products && <ProductList products={products} />}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(Admin);

/* 
name,
type,
price: +price,
details,
color,
size,
image: "https://picsum.photos/id/237/200/300",
images: [
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
],
*/
