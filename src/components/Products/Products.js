import React from "react";
import styles from "./Products.module.scss";
import Product from "../Product/Product";
import PRODUCT_LIST from './products-data';

const Products = ({PRODUCT_LIST}) => {
  return (
    <div className={styles.Products}>
      <div className={styles.productGallery}>
        {PRODUCT_LIST.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
