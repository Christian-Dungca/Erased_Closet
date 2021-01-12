import React, { useState } from "react";

import Cart from "../components/Cart/Cart";
import Backdrop from "../../shared/components/Backdrop/Backdrop";
import Navigation from "../../shared/components/Navigation/Navigation";
import styles from "./ProductsPag.module.scss";

const ProductsPage = () => {
  const [isCartOpen, setCart] = useState(false);

  const handleCart = () => {
    setCart(!isCartOpen);
  };

  return (
    <div>
      {isCartOpen && (
        <>
          <Cart handleCart={handleCart} />
          <Backdrop onclick={handleCart} />
        </>
      )}
      <Navigation handleCart={handleCart} />
      <div className={styles.ProductsPage}>
        <div className={styles.leftContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.mainTitle}> Erased Closet </h1>
            <h3 className={styles.subTitle}> Will You Carry the Mark </h3>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.imageContainer}></div>
        </div>
        <div className={styles.productNumber}>
          <h2> 01 <span> / </span> 12 </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
