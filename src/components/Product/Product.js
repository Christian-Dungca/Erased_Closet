import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import { BagContext } from "../App/App";

import { connect } from 'react-redux';
import * as actions from '../../store/actions/favorites';

const Product = ({ id, product, addProductToFavorites, removeFromFavorites }) => {
  const dispatch = useContext(BagContext);

  const handleBaggedProduct = () => {
    addProductToFavorites(product.id)
  };
  const removeProductFromFavorites = () => {
    removeFromFavorites(product.id)
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
    <div className={styles.Product} >
      <h2  onClick={handleBaggedProduct} style={{marginBottom: '200px', color: 'white'}}> Add</h2>
      <h2  onClick={removeProductFromFavorites} style={{color: 'white'}}> Remove</h2>
      {/* <Link
        to={`product/${product.id}`}
        className={styles.link}
      > */}
        <div className={styles.innerImage}>
          <h5 className={styles.productName}>
            {nameFirstHalf}{" "}
            <span className={styles.newline}> {nameLastHalf} </span>{" "}
          </h5>
        </div>
      {/* </Link> */}
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    addProductToFavorites: (id) => {dispatch(actions.addToFavorites(id))},
    removeFromFavorites: (id) => {dispatch(actions.removeFromFavorites(id))}
  }
}

export default connect(null, mapDispatchToProps)(Product);

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
