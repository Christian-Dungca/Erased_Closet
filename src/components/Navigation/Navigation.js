import React from "react";
import styles from "./Navigation.module.scss";

const Navigation = ({ toggleBagModal }) => {
  return (
    <div className={styles.Navigation}>
      <p>Enter Now</p>
      <p className={styles.name}>The Erased Closet</p>
      <p className={styles.cartBtn} onClick={toggleBagModal}>
        Cart
      </p>
    </div>
  );
};

export default Navigation;
