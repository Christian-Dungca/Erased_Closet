import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = ({ toggleBagModal }) => {
  return (
    <div className={styles.Navigation}>
      <NavLink to="/#about">Enter Now</NavLink>
      <NavLink to="/" className={styles.name}>
        The Erased Closet
      </NavLink>
      <p className={styles.cartBtn} onClick={toggleBagModal}>
        Cart
      </p>
    </div>
  );
};

export default Navigation;
