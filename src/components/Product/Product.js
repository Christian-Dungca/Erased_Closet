import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import { BagContext } from "../App/App";

const Product = ({ id, product }) => {
  const dispatch = useContext(BagContext);

  const handleBaggedProduct = () => {
    dispatch({
      type: product.inBag ? "REMOVE_FROM_BAG" : "ADD_TO_BAG",
      id: product.id,
    });
  };

  const nameFirstHalf = product.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word + " ");
  const nameLastHalf = product.name
    .split(" ")
    .slice(2, 4)
    .map((word) => word + " ");

  return (
    <div className={styles.Product}>
      <h2 className={styles.erasedName}> Erased Closet</h2>
      <Link
        to={`product/${product.id}`}
        className={styles.link}
      >
        <div className={styles.innerImage}>
          <h5 className={styles.productName}>
            {nameFirstHalf}{" "}
            <span className={styles.newline}> {nameLastHalf} </span>{" "}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default Product;

// <div className={styles.Product}>
//   <div className={styles.productImage}>
//     <p className={styles.toggleBtn} onClick={handleBaggedProduct}>
//       TOGGLE FROM BAG
//     </p>
//   </div>
//   <div className={styles.productDetails}>
//     <p className={styles.productName}>{product.name}</p>
//     <p className={styles.productDescription}>
//       lorem ipsum components is defined but never is used. suave thick wool
//       sweater
//     </p>
//   </div>
// </div>
