import React from "react";
import styles from "./Products.module.scss";
import Product from "../Product/Product";

const Products = ({PRODUCT_LIST}) => {
  return (
    <div className={styles.Products}>
      <div className={styles.productGallery}>
        {PRODUCT_LIST.map((product) => {
          return (
            <Product
              key={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
