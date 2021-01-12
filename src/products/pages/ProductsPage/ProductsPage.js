import React, { useState } from "react";
import {Link} from 'react-router-dom';

import Cart from "../../components/Cart/Cart";
import Backdrop from "../../../shared/components/Backdrop/Backdrop";
import Navigation from "../../../shared/components/Navigation/Navigation";
import styles from "./ProductsPag.module.scss";

const ProductsPage = (props) => {
  

  return (
    <div>
      {props.isCartOpen && (
        <>
          <Cart handleCart={props.handleCart} />
          <Backdrop onclick={props.handleCart} />
        </>
      )}
      <Navigation handleCart={props.handleCart} />
      <div className={styles.ProductsPage}>
        <div className={styles.leftContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.mainTitle}> Erased Closet </h1>
            <h3 className={styles.subTitle}> Will You Carry the Mark </h3>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Link to="/product/1" className={styles.linkContainer}>
            <div className={styles.imageContainer}></div>
          </Link>
        </div>
        <div className={styles.productNumber}>
          <h2>
            {" "}
            01 <span> / </span> 12{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
