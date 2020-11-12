import React, { useContext } from "react";
import styles from "./Product.module.scss";
import { BagContext } from "../App/App";

const Product = ({ id, product }) => {
  const dispatch = useContext(BagContext);

  // Handler dispatches an action object to bagReducer function
  const handleBaggedProduct = () => {
    dispatch({
      type: product.inBag ? "REMOVE_FROM_BAG" : "ADD_TO_BAG",
      id: product.id,
    });
  };

  //   const backgroundImage = { background: `url(${imageUrl})`, backgroundSize: 'cover' };
  //     console.log(backgroundImage.background);

  return (
    <div className={styles.Product}>
      <div className={styles.productImage}> 
        {/* CLICKING THIS WILL TRIGGER A DISPATCH TO REDUCER FUNCTION */}
        <p className={styles.toggleBtn} onClick={handleBaggedProduct}>
          TOGGLE FROM BAG
        </p>
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productDescription}>lorem ipsum components is defined but never is used. suave thick wool sweater</p>
      </div>
    </div>
  );
};

export default Product;
