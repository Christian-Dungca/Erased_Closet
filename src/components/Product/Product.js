import React, { useContext } from "react";
import styles from "./Product.module.scss";
import { BagContext } from "../App/App";

const Product = ({id, product}) => {
  const dispatch = useContext(BagContext);

  // Handler dispatches an action object to bagReducer function
  const handleBaggedProduct = () => {
    dispatch({
      type: product.inBag ? "REMOVE_FROM_BAG" : "ADD_TO_BAG",
      id: product.id
    });
  };

  //   const backgroundImage = { background: `url(${imageUrl})`, backgroundSize: 'cover' };
  //     console.log(backgroundImage.background);
  
  return (
    <div className={styles.Product}>
      <p>{product.name}</p>
      {/* CLICKING THIS WILL TRIGGER A DISPATCH TO REDUCER FUNCTION */}
      <p className={styles.cursor} onClick={handleBaggedProduct}>ADD/REMOVE FROM BAG</p>
    </div>
  );
};

export default Product;
