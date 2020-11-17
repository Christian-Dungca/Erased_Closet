import React, { useContext } from "react";
import styles from "./Products.module.scss";
import Product from "../Product/Product";
// import {ProductContext} from "../App/App";

const Products = ({productList}) => {
  // console.log('%c ************', 'font-size: 20px; background-color: pink')
  // console.table(productList)

  // const productList = useContext(ProductContext)

  return (
    <div className={styles.Products}>
      <div className={styles.productGallery}>
        {/* {productList.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default Products;
