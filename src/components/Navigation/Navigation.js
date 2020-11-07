import React from "react";
import styles from "./Navigation.module.scss";

const Navigation = ({toggleBag}) => {
  return (
    <div className={styles.Navigation}>
      <p>Enter Now</p>
      <p className={styles.name}>The Erased Closet</p>
      <p onClick={toggleBag}>Cart</p>
    </div>
  );
};

export default Navigation;
