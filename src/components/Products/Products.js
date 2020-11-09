import React, { useContext } from "react";
import styles from "./Products.module.scss";
import Product from "../Product/Product";
import {ProductContext} from "../App/App";
// import PRODUCT_LIST from './products-data';

const Products = () => {

  const PRODUCT_LIST = useContext(ProductContext)
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
