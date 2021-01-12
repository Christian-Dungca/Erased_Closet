import React from "react";
import { useHistory } from "react-router-dom";

import Navigation from "../../../shared/components/Navigation/Navigation";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className={styles.ProductPage}>
      <div onClick={handleClick} className={styles.mainImage}></div>
      <div className={styles.nextImage}></div>
      <div className={styles.detailsContainer}></div>
    </div>
  );
};

export default ProductPage;
