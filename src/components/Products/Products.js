import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.scss";
import Product from "../Product/Product";

const Products = ({ productsList }) => {
  return (
    <div className={styles.Products}>
      <div className={styles.productGallery}>
        {productsList.map((product) => {
          return (
            // <Link to={`product/${product.id}`} key={product.id}>
              <Product product={product} key={product.id} />
            // </Link> 
          );
        })}
      </div>
    </div>
  );
};

export default Products;
