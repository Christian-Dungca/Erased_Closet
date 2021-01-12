import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductContext from "../../App";
import styles from "./ProductPage.module.scss";

const ProductPage = ({ products }) => {
  let id = useParams().id;
  const product = products.filter((item) => item.id === Number(id))[0];

  const nameFirstHalf = product.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word + " ");
  const nameLastHalf = product.name
    .split(" ")
    .slice(2, 4)
    .map((word) => word + " ");

  return (
    <div className={styles.ProductPage}>
      <div className={styles.productDetails}>
        <div className={styles.detailContainer}>
          <h1 className={styles.productName}>
            {nameFirstHalf}
            <span className={styles.newline}> {nameLastHalf} </span>
          </h1>
          <p className={styles.productDescription}> {product.description} </p>
          <div className={styles.sizeSection}>
            <h5 className={styles.sizeText}> SIZE </h5>
            <div className={styles.btnContainer}>
              <div className={styles.sizeBtn}>
                <p> S </p>
              </div>
              <div className={styles.sizeBtn}>
                <p> M </p>
              </div>
              <div className={styles.sizeBtn}>
                <p> L </p>
              </div>
            </div>
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles.productImage}></div>
            <div className={styles.productImage}></div>
            <div className={styles.productImage}></div>
            <div className={styles.productImage}></div>
          </div>
        </div>
      </div>
      <div className={styles.productImages}></div>
    </div>
  );
};

export default ProductPage;
