import React, { useContext } from "react";
import styles from "./Products.module.scss";
import Product from "../Product/Product";

const Products = ({ productsList }) => {
  return (
    <div className={styles.Products}>
      <div className={styles.productGallery}>
        {productsList.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
