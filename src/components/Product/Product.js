import React from "react";
import styles from "./Product.module.scss";

const Product = (props) => {

//   const backgroundImage = { background: `url(${imageUrl})`, backgroundSize: 'cover' };
//     console.log(backgroundImage.background);
  return (
    <div className={styles.Product}>
      <p>{props.name}</p>
    </div>
  );
};

export default Product;
